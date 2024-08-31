import { CreateUsuarioDto } from './../../application/dtos/create-usuario.dto';
import { BadRequestException, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Usuario } from "../entities/usuario.entity";
import { Repository } from "typeorm";
import { UsuarioValidator } from "../validators/usuario.validator";

@Injectable()
export class UsuarioService {
    
    constructor(@InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>

     ){}

    async getUsuarioAll(): Promise<Usuario[]> {
        return await this.usuarioRepository.find({
            relations: {
                postagens: true,
                conquistas: true
            }
        })
    }

    async createUsuario(usuario: CreateUsuarioDto): Promise<Usuario> {

        try {
          

            const usuarios = await this.usuarioRepository.find()
            
            const emailErro =  UsuarioValidator.checkEmailAlreadyInUse(usuarios, usuario.email)

            if(emailErro) {
                throw new HttpException('Email já cadastrado', HttpStatus.CONFLICT)
            }

            return  this.usuarioRepository.save(usuario)

        } catch (error) {

            throw new BadRequestException({ error: error.message });

        }
       


       
        

        
    }
}