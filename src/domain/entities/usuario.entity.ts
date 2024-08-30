import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuarios')
export class Usuario {

    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column()
    public nomeCompleto: string;

    @Column({ unique: true })
    public email: string;

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