import { IsNotEmpty } from "class-validator"
import { Usuario } from "../../domain/entities/usuario.entity";
import { PrimaryGeneratedColumn } from "typeorm";

export class UpdatePostagemDto {

    @PrimaryGeneratedColumn('uuid')
    public id: string;
    
    @IsNotEmpty({message: 'O usuário é obrigatório'})
    usuario: Usuario;
  
    @IsNotEmpty()
    public titulo: string

    
    @IsNotEmpty()
    public descricao: string

}