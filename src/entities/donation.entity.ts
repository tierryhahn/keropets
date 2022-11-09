import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm'

@Entity('donations')
export class Donation {

  @PrimaryGeneratedColumn('uuid')
  readonly id: string

  @Column({ length: 68 })
  donated: string

  @Column()
  donatedBy: string
  
  @Column()
  donatedTo: string

  @CreateDateColumn({type: "date"})
  donatedAt: Date

}