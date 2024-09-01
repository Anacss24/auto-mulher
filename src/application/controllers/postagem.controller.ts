import { CreatePostagemDto } from '../dtos/create-postagem.dto';
import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { PostagemService } from "../../domain/services/postagem.service";
import { ApiTags } from '@nestjs/swagger';



@ApiTags('Postagem')
@Controller('postagens')
export class PostagemController {

    constructor(private readonly postagemService: PostagemService) {}

    @Post()
    createPostagem(@Body() postagem: CreatePostagemDto) {
        return this.postagemService.createPostagem(postagem)
    }

    @Get()
    getPostagemAll() {
        return this.postagemService.getPostagemAll()
    }

    @Get(':id')
    getPostagemById(@Param('id') id: string) {
        try {

            return this.postagemService.getPostagemById(id)

        } catch(error) {
            throw new NotFoundException({error: error.message})

        }
    }

    @Delete(':id')
    deleteUsuario(@Param('id') id: string) {
        return this.postagemService.deletePostagem(id)
    }
}