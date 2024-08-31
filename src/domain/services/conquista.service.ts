import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Conquista } from "../entities/conquista.entity";

@Injectable()
export class ConquistaService {

    constructor(@InjectRepository(Conquista)
    private conquistaRepository: Repository<Conquista>
    
    ) { }

    async createConquista(conquista: Conquista):Promise<Conquista> {
        return await this.conquistaRepository.save(conquista)
    }

    async getConquistaAll():Promise<Conquista[]> {
        return await this.conquistaRepository.find({
            relations: {
                usuario: true
            }
        })
    }
}