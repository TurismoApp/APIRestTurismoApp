import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Types } from "mariadb";
import { activity } from "./activity.entity";

@Entity()
export class inCharge {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ length: 21 })
    public name: string;

    @Column({ nullable: true })
    public description: string;

    @Column({ length: 22 })
    public address: string;

    @Column({ length: 11 })
    public phone: string;

    @Column({ length: 21, nullable: true })
    public email: string;

    @Column({ nullable: true })
    public webpage: string;

    @Column({ length: 12, nullable: true })
    public identification: string;

    @Column({ nullable: true})
    public image: string;

    @Column({ type: 'int', default: '0' , comment: '1 - is entity(gov, inst, etc) y 0 - is not entity'})
    public isEntity: Types.INT24;

    @OneToMany(type => activity, activity => activity.inCharge)
    public activitys: activity[];

}