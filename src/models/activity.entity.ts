import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, ManyToOne, JoinColumn } from "typeorm";
import { images } from "./images.entity";
import { ubications } from "./ubications.entity";
import { inCharge } from "./inCharge.entity";
import { Types } from "mariadb";
import { schedules } from "./schedules.entity";


@Entity()
export class activity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: 'int', unique: false, nullable: false })
    public idCharge: Types.INT24;

    @Column()
    public title: string;

    @Column()
    public description: string;

    @Column()
    public dateStart: Date;

    @Column({ nullable: true })
    public dateEnd?: Date;

    @Column({ length: 3, default: 'E' })
    public state: string;

    @ManyToOne(type => inCharge, charge => charge.activitys)
    @JoinColumn({ name: 'idCharge', referencedColumnName: 'id' })
    public inCharge: inCharge;

    @OneToMany(type => schedules, schedule => schedule.activityParent)
    public schedules: schedules[];

    @OneToMany(type => ubications, ubication => ubication.activityOwner)
    public ubications: ubications[];

    @OneToMany(type => images, image => image.activity)
    public images: images[];
}