import { Body, Controller, Delete, Get, NotFoundException, Param, Post } from "@nestjs/common";
import { ConquistaService } from "../../domain/services/conquista.service";
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

    @Get(':id')
    getConquistaById(@Param('id') id: string) {
        try {

            return this.conquistaService.getConquistaById(id)

        } catch(error) {
            throw new NotFoundException({error: error.message})

        }
    }

    @Delete(':id')
    deleteUsuario(@Param('id') id: string) {
        return this.conquistaService.deleteConquista(id)
    }
}