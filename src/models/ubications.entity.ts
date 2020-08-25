import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { activity } from "./activity.entity";
import { Types } from "mariadb";
import { place } from "./place.entity";

@Entity()
export class ubications {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: 'int', nullable: false, unique: false })
    public idActivity: Types.INT24;

    @Column()
    public latitude: string;

    @Column()
    public longitude: string;

    @ManyToOne(type => activity, activity => activity.ubications)
    @JoinColumn({ name: 'idActivity', referencedColumnName: 'id' })
    public activityOwner: activity;

    @OneToOne(type => place, place => place.ubications)
    public inplace: place;
}