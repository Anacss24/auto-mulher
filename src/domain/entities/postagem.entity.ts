import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./usuario.entity";

@Entity()
export class Postagem {
    
    @PrimaryGeneratedColumn('uuid')
    public id: string

    @Column()
    public titulo: string

    @Column()
    public descricao: string

    @ManyToOne(() => Usuario, usuario => usuario.postagens)
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