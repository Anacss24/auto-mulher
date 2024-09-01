import { IsNotEmpty } from "class-validator"
import { Usuario } from "../../domain/entities/usuario.entity";
import { ApiProperty } from "@nestjs/swagger";

export class CreatePostagemDto {
    
    @IsNotEmpty({message: 'O usuário é obrigatório'})
    @ApiProperty()
    usuario: Usuario;
  
    @IsNotEmpty()
    @ApiProperty()
    public titulo: string

    
    @IsNotEmpty()
    @ApiProperty()
    public descricao: string

}


