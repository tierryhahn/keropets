import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm'
import { User } from './user.entity'
import { Ong } from './ong.entity'

@Entity('donations')
export class Donation {

  @PrimaryGeneratedColumn('uuid')
  readonly id: string

  @Column({ length: 68 })
  type: string

  @Column({ length: 68 })
  quantity: string

  @Column()
  donatedBy: string
  
  @Column()
  donatedTo: string

  @CreateDateColumn({type: "date"})
  donatedAt: Date

}