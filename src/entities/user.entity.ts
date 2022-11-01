import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany  } from "typeorm";
import { Exclude } from "class-transformer";
import { Pets } from "./pets.entity";

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
    
    @OneToMany(() => Pets, userPets => userPets.user)
    pets: Pets[]
}

export {User}