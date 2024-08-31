import { IsEnum, IsNotEmpty, Length } from "class-validator";
import { ConquistaStatus } from "../../domain/enums/conquista-status.enum";
import { PrimaryGeneratedColumn } from "typeorm";


export class UpdateConquistaDto {
    
    @PrimaryGeneratedColumn('uuid')
    public id: string;
     
    @IsEnum(ConquistaStatus, {message: 'Status deve ser um dos seguintes valores: publico ou privado'})
    status: ConquistaStatus;
  
    @IsNotEmpty()
    @Length(3, 50)
    nome:string;

   
    @IsNotEmpty()
    @Length(10, 500)
    descricao: string;

}