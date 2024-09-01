import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUsuarioDto {

    @IsNotEmpty({message: 'Por favor, forneça o nome completo'} )
    @ApiProperty()
    nomeCompleto: string; 

    @IsEmail({}, {message: 'Por favor, forneça um email válido'})
    @ApiProperty()
    email: string;

    @MinLength(8, {message: 'A senha deve ter no minímo 8 caracteres'})
    @ApiProperty()
    senha: string;
}



