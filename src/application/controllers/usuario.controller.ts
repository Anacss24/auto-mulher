import { BadRequestException, Body, Controller, Get, HttpException, HttpStatus, Post } from "@nestjs/common";
import { UsuarioService } from "../../domain/services/usuario.service";
import { CreateUsuarioDto } from "../dtos/create-usuario.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Usuario')
@Controller('usuarios')
export class UsuarioController {
    
    constructor(private usuarioService: UsuarioService) {}

    @Post()
    createUsuario(@Body() usuario: CreateUsuarioDto): Promise<any> {

        try {
            
            return this.usuarioService.createUsuario(usuario)
    
        } catch (error) {

            throw new HttpException('Erro ao criar usuário: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);

        } 
    }

    @Get()
    getUsuarioAll() {
        return this.usuarioService.getUsuarioAll()
    }
}