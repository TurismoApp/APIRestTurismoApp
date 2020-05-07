import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { activity } from "./activity.entity";

@Entity()
export class ubications {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public latitude: string;

    @Column()
    public longitude: string;

    @ManyToOne(type => activity, activity => activity.ubications)
    public activityOwner: activity;
}