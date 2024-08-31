import { IsNotEmpty } from "class-validator"

export class CreatePostagemDto {
    
  
    @IsNotEmpty()
    public titulo: string

    
    @IsNotEmpty()
    public descricao: string

}


