import { Module } from "@nestjs/common";
import { InfrastructureModule } from "../infrastructure/infrastructure.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Usuario } from "./entities/usuario.entity";

@Module({
    imports: [InfrastructureModule, TypeOrmModule.forFeature([Usuario])],
    providers: [],
    exports: []
})

export class DomainModule {}