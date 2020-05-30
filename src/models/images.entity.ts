import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { Types } from 'mariadb';
import { activity } from "./activity.entity";
import { place } from "./place.entity";

@Entity()
export class images {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: 'int', unique: false, nullable: false })
    public idActivity: Types.INT24;

    @Column({ length: 21, nullable: true })
    public title: string;

    @Column()
    public link: string;

    @ManyToOne(type => activity, activity => activity.images)
    @JoinColumn({ name: 'idActivity', referencedColumnName: 'id' })
    activity: activity;

    @ManyToOne(type => place, place => place.image)
    public image: place;
}