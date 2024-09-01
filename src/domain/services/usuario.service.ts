
import { CreateConquistaDto } from './../../application/dtos/create-conquista.dto';
import { CreateUsuarioDto } from './../../application/dtos/create-usuario.dto';
import { BadRequestException, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Usuario } from "../entities/usuario.entity";
import { DeleteResult, Repository } from "typeorm";
import { UsuarioValidator } from "../validators/usuario.validator";
import { Bcrypt } from '../../infrastructure/bcrypt/bcrypt';

@Injectable()
export class UsuarioService {
    
    constructor(@InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    private bcrypt: Bcrypt

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
          
            UsuarioValidator.verifyEmail(usuario.email)

            const usuarios = await this.usuarioRepository.find()
            
            const emailErro =  UsuarioValidator.checkEmailAlreadyInUse(usuarios, usuario.email)

            if(!emailErro) {
                throw new HttpException('Email já cadastrado', HttpStatus.CONFLICT)
            }

            if (!usuario.senha) {
                throw new BadRequestException('Senha é obrigatória');
            }
    
            usuario.senha = await this.bcrypt.criptografarSenha(usuario.senha);
            return this.usuarioRepository.save(usuario)

        } catch (error) {

            throw new BadRequestException({ error: error.message });

        }
        
    }

    async getUsuarioById(id: string): Promise<Usuario> {
       return await this.usuarioRepository.findOne({
            where: {id},
            relations: {
                postagens: true,
                conquistas: true
            }
       })
    
    }

    

    async deleteUsuario(id: string): Promise<DeleteResult> {
        
        return await this.usuarioRepository.delete(id)
    }
     

}