import { CreateConquistaDto } from './../../application/dtos/create-conquista.dto';
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { Conquista } from "../entities/conquista.entity";

@Injectable()
export class ConquistaService {

    constructor(@InjectRepository(Conquista)
    private conquistaRepository: Repository<Conquista>
    
    ) { }

    async createConquista(conquista: CreateConquistaDto):Promise<Conquista> {
        
        return await this.conquistaRepository.save(conquista)      
    }

    async getConquistaAll():Promise<Conquista[]> {
        return await this.conquistaRepository.find({
            relations: {
                usuario: true
            }
        })
    }

    async getConquistaById(id: string): Promise<Conquista> {
        return await this.conquistaRepository.findOne({
             where: {id},
             relations: {
                 usuario: true
             }
        })
     
     }

     async deleteConquista(id: string): Promise<DeleteResult> {
        
        return await this.conquistaRepository.delete(id)
    }
     
}