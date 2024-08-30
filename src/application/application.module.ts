import { Module } from "@nestjs/common";
import { DomainModule } from "../domain/domain.module";
import { UsuarioController } from "./controllers/usuario.controller";

@Module({
    imports: [DomainModule],
    controllers:[UsuarioController],
    providers: []

})

export class AplicationModule {}