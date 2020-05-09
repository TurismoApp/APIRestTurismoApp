import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { activity } from "./activity.entity";

@Entity()
export class ubications {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column({ type: 'int', unique: false, nullable: false })
    public idactivity: Types.INT24;

    @Column()
    public latitude: string;

    @Column()
    public longitude: string;

    @ManyToOne(type => activity, activity => activity.ubications)
    @JoinColumn({ name: 'idactivity', referencedColumnName: 'id' })
    public activityOwner: activity;
}