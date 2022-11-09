import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { Exclude } from "class-transformer";
import { Address } from "./adress_entity";
import { Donation } from "./donation.entity";
import { Pets } from "./pets.entity";

@Entity("ong")
export class Ong {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column({
        unique: true
    })
    email: string;

    @Column({default: true})
    isActive: boolean;

    @Column({default: true})
    isOng: boolean;

    @Column()
    isOngAdm: boolean;

    @Exclude()
    @Column({length:120})  
    password: string;


    @CreateDateColumn({type: "date"})
    createdAt: Date
    
    @UpdateDateColumn({type: "date"})
    updatedAt: Date

    @OneToOne(() => Address, ong => Ong, {
        eager: true,
        cascade: true
    })
    @JoinColumn()
    address: Address;

    

}