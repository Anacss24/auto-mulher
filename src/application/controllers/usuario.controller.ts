import { BadRequestException, Body, Controller, Delete, Get, HttpException, HttpStatus, NotFoundException, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { UsuarioService } from "../../domain/services/usuario.service";
import { CreateUsuarioDto } from "../dtos/create-usuario.dto";
import { ApiInternalServerErrorResponse, ApiTags } from "@nestjs/swagger";
import { UpdateUsuarioDto } from "../dtos/update-usuario.dto";

@ApiTags('Usuario')
@Controller('usuarios')
export class UsuarioController {
    
    constructor(private usuarioService: UsuarioService) {}

    @Post()
    @ApiInternalServerErrorResponse({description: 'Erro ao criar usuário'})
    createUsuario(@Body() usuario: CreateUsuarioDto) {

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

    @Get(':id')
    getUsuarioById(@Param('id') id: string) {
        try {

            return this.usuarioService.getUsuarioById(id)

        } catch(error) {
            throw new NotFoundException({error: error.message})

        }
    }


    @Delete(':id')
    deleteUsuario(@Param('id') id: string) {
        return this.usuarioService.deleteUsuario(id)
    }
}