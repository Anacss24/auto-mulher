import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ConquistaStatus } from "../enums/conquista-status.enum";
import { Usuario } from "./usuario.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Conquista {
    
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty()
    public id: string

    @Column({
        type: "enum",
        enum: ConquistaStatus,
        default: ConquistaStatus.PRIVADO
    })
    @ApiProperty()
    public status: ConquistaStatus;

    @Column()
    @ApiProperty()
    public nome: string

    @Column()
    @ApiProperty()
    public descricao: string

    @ApiProperty({type: () => Usuario})
    @ManyToOne(() => Usuario, usuario => usuario.conquistas, {
        onDelete: 'CASCADE'
    })
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