import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuarios/entity/usuario.entity';
import { UsuarioModule } from './usuarios/usuario.module';

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
    UsuarioModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
