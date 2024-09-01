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


 async deletePostagem(id: string): Promise<DeleteResult> {
     
     return await this.postagemRepository.delete(id)
 }
  

}