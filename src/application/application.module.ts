import { Module } from "@nestjs/common";
import { DomainModule } from "../domain/domain.module";
import { UsuarioController } from "./controllers/usuario.controller";
import { PostagemController } from "./controllers/postagem.controller";
import { ConquistaController } from "./controllers/conquista.controller";

@Module({
    imports: [DomainModule],
    controllers:[UsuarioController, PostagemController, ConquistaController],
    providers: []

})

export class AplicationModule {}