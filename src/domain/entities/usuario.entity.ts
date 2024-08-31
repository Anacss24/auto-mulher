import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Conquista } from "./conquista.entity";
import { Postagem } from "./postagem.entity";

@Entity('usuarios')
export class Usuario {

    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column()
    public nomeCompleto: string;

    @Column({ unique: true })
    public email: string;

    @OneToMany(() => Conquista, conquista => conquista.usuario)
    conquistas: Conquista [];
    
    @OneToMany(() => Postagem, postagem => postagem.usuario)
    postagens: Postagem [];


    constructor(
        nomeCompleto: string,
        email: string,
        id?: string

    ) {

        this.nomeCompleto = nomeCompleto;
        this.email = email;

        if (!id) {
            this.id = id;
        }
    }


}