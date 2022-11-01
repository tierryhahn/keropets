import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany  } from "typeorm";

@Entity('users')
class User{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length: 68})
    name: string
    
    @Column({length: 68, unique: true})
    email: string
    
    @Column({ length: 128 })
    password: string
    
    @Column()
    isAdm: boolean

    @Column()
    isActive: boolean
    
    @CreateDateColumn()
    createdAt: Date
    
    @UpdateDateColumn()
    updatedAt: Date
    
}

export {User}