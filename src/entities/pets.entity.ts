import { Entity, PrimaryGeneratedColumn, Column, ManyToOne  } from "typeorm"
import { Ong } from "./ong.entity";
import { User } from "./user.entity";



@Entity("pets")
export class Pets {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;
    
    @Column()
    species: string;

    @Column()
    breed: string;

    @Column()
    age: string;

    @Column("boolean", {default: true})
    isAvailable: boolean;

    @Column()
    ownerId: string;

    

}