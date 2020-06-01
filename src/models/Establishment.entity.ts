import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { place } from "./place.entity";
import { Types } from "mariadb";


@Entity()
export class Establishment {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public title: string;

    @Column()
    public description: string;

    @ManyToOne(type => place, place => place.idEstablish)
    public Establish: place;

}