import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./usuario.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Postagem {
    
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty()
    public id: string

    @Column()
    @ApiProperty()
    public titulo: string

    @Column()
    @ApiProperty()
    public descricao: string

    @ApiProperty({ type: () => Usuario})
    @ManyToOne(() => Usuario, usuario => usuario.postagens, {
        onDelete: 'CASCADE',
    })
    usuario: Usuario;

    constructor(
        titulo: string,
        descricao: string,
        id?: string

    ) {

        this.titulo = titulo;
        this.descricao = descricao;

        if (!id) {
            this.id = id;
        }
    }
}