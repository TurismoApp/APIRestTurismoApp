import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { images } from "./images.entity";
import { ubications } from "./ubications.entity";
import { Types } from "mariadb";
import { Establishment } from "./Establishment.entity";


@Entity()
export class place {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: 'int', nullable: true, unique: false })
    public idubications: Types.INT24;

    @Column({ type: 'int', unique: false, nullable: true })
    public idtestablish: Types.INT24;

    @Column()
    public name: string;

    @Column()
    public description: string;

    @Column()
    public direction: string;

    @Column()
    public email: string;

    @Column()
    public phone: string;

    @Column({ length: 3, default: 'E' })
    public state: string;

    @ManyToOne(type => ubications, ubications => ubications.inplace)
    @JoinColumn({ name: 'idubications', referencedColumnName: 'id' })
    public ubications: ubications;

    @OneToMany(type => images, images => images.place)
    public images: images[];

    @OneToMany(type => Establishment, Establishment => Establishment.Establish)
    @JoinColumn({ name: 'idtestablish', referencedColumnName: 'id' })
    public idEstablish: Establishment;
}