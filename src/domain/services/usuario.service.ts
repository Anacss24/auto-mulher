import { UpdateUsuarioDto } from './../../application/dtos/update-usuario.dto';
import { CreateConquistaDto } from './../../application/dtos/create-conquista.dto';
import { CreateUsuarioDto } from './../../application/dtos/create-usuario.dto';
import { BadRequestException, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Usuario } from "../entities/usuario.entity";
import { DeleteResult, Repository } from "typeorm";
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
          
            UsuarioValidator.verifyEmail(usuario.email)

            const usuarios = await this.usuarioRepository.find()
            
            const emailErro =  UsuarioValidator.checkEmailAlreadyInUse(usuarios, usuario.email)

            if(!emailErro) {
                throw new HttpException('Email já cadastrado', HttpStatus.CONFLICT)
            }

            return  this.usuarioRepository.save(usuario)

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

    async upadateUsuario(usuario: UpdateUsuarioDto): Promise<Usuario> {
      let buscarUsuario = await this.getUsuarioById(usuario.id)

      if(!buscarUsuario || !usuario.id) {
        throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND)
      }

      return this.usuarioRepository.save(usuario)
    }

    async deleteUsuario(id: string): Promise<DeleteResult> {
        
        return await this.usuarioRepository.delete(id)
    }
     

}