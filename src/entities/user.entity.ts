import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn  } from "typeorm";
import { Exclude } from "class-transformer";
import { Pets } from "./pets.entity";
import { Address } from "./adress_entity";

@Entity('users')
class User{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length: 68})
    name: string
    
    @Column({length: 68, unique: true})
    email: string
    
    @Column({ length: 128 })
    @Exclude()
    password: string
    
    @Column()
    isAdm: boolean

    @Column()
    isActive: boolean
    
    @CreateDateColumn()
    createdAt: Date
    
    @UpdateDateColumn()
    updatedAt: Date
    
    @OneToOne(() => Address, user => User, {
        eager: true,
        cascade: true
    })
    @JoinColumn()
    address: Address;
}

export {User}