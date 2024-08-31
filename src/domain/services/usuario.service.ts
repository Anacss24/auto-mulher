import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Usuario } from "../entities/usuario.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsuarioService {
    
    constructor(@InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>

     ){}

    async createUsuario(usuario: Usuario): Promise<Usuario> {
        return await this.usuarioRepository.save(usuario)
    }

    async getUsuarioAll(): Promise<Usuario[]> {
        return await this.usuarioRepository.find({
            relations: {
                postagens: true,
                conquistas: true
            }
        })
    }
}