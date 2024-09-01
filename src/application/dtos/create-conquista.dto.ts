import { IsEnum, IsNotEmpty, Length } from "class-validator";
import { ConquistaStatus } from "../../domain/enums/conquista-status.enum";
import { ApiProperty } from "@nestjs/swagger";


export class CreateConquistaDto {
    
  
    @IsEnum(ConquistaStatus, {message: 'Status deve ser um dos seguintes valores: publico ou privado'})
    @ApiProperty()
    status: ConquistaStatus;

  
    @IsNotEmpty()
    @Length(3, 50)
    @ApiProperty()
    nome:string;

   
    @IsNotEmpty()
    @Length(10, 500)
    @ApiProperty()
    descricao: string;

}