import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioService } from "../../domain/services/usuario.service";
import { Usuario } from "../../domain/entities/usuario.entity";

@Controller('usuarios')
export class UsuarioController {
    
    constructor(private usuarioService: UsuarioService) {}

    @Post()
    createUsuario(@Body() usuario: Usuario) {
        return this.usuarioService.createUsuario(usuario)
    }

    @Get()
    getUsuarioAll() {
        return this.usuarioService.getUsuarioAll()
    }
}