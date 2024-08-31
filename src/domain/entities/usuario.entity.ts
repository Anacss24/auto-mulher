import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Conquista } from "./conquista.entity";
import { Postagem } from "./postagem.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity('usuarios')
export class Usuario {

    @PrimaryGeneratedColumn('uuid')
    @ApiProperty()
    public id: string;

    @Column()
    @ApiProperty()
    public nomeCompleto: string;

    @Column({ unique: true })
    @ApiProperty()
    public email: string;

    @Column()
    @ApiProperty()
    senha: string

    @ApiProperty({type: () => Conquista})
    @OneToMany(() => Conquista, conquista => conquista.usuario)
    conquistas: Conquista [];
    
    @ApiProperty({type: () => Postagem})
    @OneToMany(() => Postagem, postagem => postagem.usuario)
    postagens: Postagem [];


    constructor(
        nomeCompleto: string,
        email: string,
        senha: string,
        id?: string

    ) {

        this.nomeCompleto = nomeCompleto;
        this.email = email;
        this.senha = senha

        if (!id) {
            this.id = id;
        }
    }


}