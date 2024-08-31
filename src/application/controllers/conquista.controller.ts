import { Body, Controller, Get, Post } from "@nestjs/common";
import { ConquistaService } from "../../domain/services/conquista.service";
import { Conquista } from "../../domain/entities/conquista.entity";
import { CreateConquistaDto } from "../dtos/create-conquista.dto";
import { ApiTags } from "@nestjs/swagger";
@ApiTags('Conquista')
@Controller('conquistas')
export class ConquistaController{

    constructor(private readonly conquistaService: ConquistaService) {}

    @Post()
    createConquista(@Body() conquista: CreateConquistaDto){
        return this.conquistaService.createConquista(conquista)
    }

    @Get()
    getConquistaAll() {
        return this.conquistaService.getConquistaAll()
    }
}