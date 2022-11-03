import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { Pets } from "./pets.entity";

@Entity("ong")
export class Ong {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({
        unique: true,

    })
    email: string;

    @Column()
    isActive: boolean;

    @Column()
    password: string;

    @CreateDateColumn({type: "date"})
    createdAt: Date
    
    @UpdateDateColumn({type: "date"})
    updatedAt: Date

    @OneToOne(() => Address, (ong) => Ong, {
        eager: true,
        cascade: true
    })
    @JoinColumn()
    address: IAddressRequest;

    @OneToMany(() => Pets, (pet) => pet.ong)
    pet: Pets[];

    @OneToMany(() => Donations, (donations) => donations.ong)
    donations: Donations[]





}