import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './domain/entities/usuario.entity';
import { DomainModule } from './domain/domain.module';
import { AplicationModule } from './application/application.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { Postagem } from './domain/entities/postagem.entity';
import { Conquista } from './domain/entities/conquista.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      url: process.env.DATABASE_URL,
      entities: [Usuario, Postagem, Conquista],
      synchronize: true,

    }),
    DomainModule,
    AplicationModule,
    InfrastructureModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
