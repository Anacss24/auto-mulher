import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './domain/entities/usuario.entity';
import { DomainModule } from './domain/domain.module';
import { AplicationModule } from './application/application.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port: 5432,
      database: 'db_auto_mulher',
      username: 'postgres',
      password: 'root',
      entities: [Usuario],
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
