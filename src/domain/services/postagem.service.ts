import { UpdateConquistaDto } from './../../application/dtos/update-conquita.dto';
import { CreatePostagemDto } from '../../application/dtos/create-postagem.dto';
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Postagem } from "../entities/postagem.entity";
import { DeleteResult, Repository } from "typeorm";

@Injectable()
export class PostagemService {

   constructor(@InjectRepository(Postagem)
   private postagemRepository: Repository<Postagem>

   ) { }

   async createPostagem(postagem: CreatePostagemDto): Promise<Postagem> {
    return await this.postagemRepository.save(postagem)
   }

   async getPostagemAll(): Promise<Postagem[]> {
    return await this.postagemRepository.find({
        relations:{
            usuario: true
        }
    })
   }

   async getPostagemById(id: string): Promise<Postagem> {
    return await this.postagemRepository.findOne({
         where: {id},
         relations: {
             usuario: true,
         }
    })
 
 }

 async upadatePostagem(usuario: UpdateConquistaDto): Promise<Postagem> {
   let buscarUsuario = await this.getPostagemById(usuario.id)

   if(!buscarUsuario || !usuario.id) {
     throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND)
   }

   return this.postagemRepository.save(usuario)
 }

 async deletePostagem(id: string): Promise<DeleteResult> {
     
     return await this.postagemRepository.delete(id)
 }
  

}