import { Entity, PrimaryGeneratedColumn, Column, ManyToOne  } from "typeorm"
import { Ong } from "./ong.entity";


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

    @Column()
    adopted: boolean;

    @ManyToOne(() => User, {eager: true})
    user: User

    @ManyToOne(() => Ong, {eager: true})
    ong: Ong

}