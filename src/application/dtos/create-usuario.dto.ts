import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUsuarioDto {

    @IsNotEmpty()
    nomeCompleto: string; 

    @IsEmail({}, {message: 'Por favor, forneça um email válido'})
    email: string;

    @MinLength(8, {message: 'A senha deve ter no minímo 8 caracteres'})
    senha: string;
}



