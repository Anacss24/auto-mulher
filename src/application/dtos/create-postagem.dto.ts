import { IsNotEmpty } from "class-validator"
import { Usuario } from "../../domain/entities/usuario.entity";

export class CreatePostagemDto {
    
    @IsNotEmpty({message: 'O usuário é obrigatório'})
    usuario: Usuario;
  
    @IsNotEmpty()
    public titulo: string

    
    @IsNotEmpty()
    public descricao: string

}


