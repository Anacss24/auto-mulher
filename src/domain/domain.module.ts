import { Module } from "@nestjs/common";
import { InfrastructureModule } from "../infrastructure/infrastructure.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Usuario } from "./entities/usuario.entity";
import { UsuarioService } from "./services/usuario.service";
import { Postagem } from "./entities/postagem.entity";
import { Conquista } from "./entities/conquista.entity";
import { PostagemService } from "./services/postagem.service";
import { ConquistaService } from "./services/conquista.service";

@Module({
    imports: [InfrastructureModule, TypeOrmModule.forFeature([Usuario, Postagem, Conquista])],
    providers: [UsuarioService, PostagemService, ConquistaService],
    exports: [UsuarioService, PostagemService, ConquistaService]
})

export class DomainModule {}