import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Postagem } from "../entities/postagem.entity";
import { Repository } from "typeorm";

@Injectable()
export class PostagemService {

   constructor(@InjectRepository(Postagem)
   private postagemRepository: Repository<Postagem>

   ) { }

   async createPostagem(postagem: Postagem): Promise<Postagem> {
    return await this.postagemRepository.save(postagem)
   }

   async getPostagemAll(): Promise<Postagem[]> {
    return await this.postagemRepository.find({
        relations:{
            usuario: true
        }
    })
   }
}