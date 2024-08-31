import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ConquistaStatus } from "../enums/conquista-status.enum";
import { Usuario } from "./usuario.entity";

@Entity()
export class Conquista {
    
    @PrimaryGeneratedColumn('uuid')
    public id: string

    @Column({
        type: "enum",
        enum: ConquistaStatus,
        default: ConquistaStatus.PRIVADO
    })
    public status: ConquistaStatus;

    @Column()
    public nome: string

    @Column()
    public descricao: string

    @ManyToOne(() => Usuario, usuario => usuario.conquistas)
    usuario: Usuario;

    constructor(
        status: ConquistaStatus,
        nome: string,
        descricao: string,
        id?: string
    ) {
        this.status = status;
        this.nome = nome;
        this.descricao = descricao;

        if (!id) {
            this.id = id;
        }
        
    }
}