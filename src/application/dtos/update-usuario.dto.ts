import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";

export class UpdateUsuarioDto {

    @PrimaryGeneratedColumn('uuid')
    public id: string;
 
    @IsNotEmpty({message: 'Por favor, forneça o nome completo'} )
    nomeCompleto: string; 

    @IsEmail({}, {message: 'Por favor, forneça um email válido'})
    email: string;

    @MinLength(8, {message: 'A senha deve ter no minímo 8 caracteres'})
    senha: string;
}