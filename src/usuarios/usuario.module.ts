import { Module } from "@nestjs/common";
import { Usuario } from "./entity/usuario.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports:[TypeOrmModule.forFeature([Usuario])],
    providers: [],
    controllers: [],
    exports:[]
})

export class UsuarioModule {}