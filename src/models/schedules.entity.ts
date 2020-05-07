import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { Types } from "mariadb";
import { activity } from "./activity.entity";

@Entity()
export class schedules {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: 'int', nullable: false })
    public idActivityParent: Types.INT24;

    @Column({ type: 'int', nullable: false })
    public idActivityChild: Types.INT24;

    @ManyToOne(type => activity, activityParent => activityParent.schedules)
    @JoinColumn({ name: 'idActivityParent', referencedColumnName: 'id' })
    public activityParent: activity;

    @OneToOne(type => activity)
    @JoinColumn({name: "idActivityChild", referencedColumnName: 'id' })
    public activityChild: activity;

}