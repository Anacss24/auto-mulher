import { Body, Controller, Get, Post } from "@nestjs/common";
import { PostagemService } from "../../domain/services/postagem.service";
import { Postagem } from "../../domain/entities/postagem.entity";

@Controller('postagens')
export class PostagemController {

    constructor(private readonly postagemService: PostagemService) {}

    @Post()
    createPostagem(@Body() postagem: Postagem) {
        return this.postagemService.createPostagem(postagem)
    }

    @Get()
    getPostagemAll() {
        return this.postagemService.getPostagemAll()
    }
}