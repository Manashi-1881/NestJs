
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @ApiProperty({
    description: 'User id'
  })
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;

  @ApiProperty({
    description: 'User username'
  })
  @Column({
    nullable: false,
    default: '',
  })
  username: string;

  @ApiProperty({
    description: 'User email'
  })
  @Column({
    name: 'email_address',
    nullable: false,
    default: '',
  })
  email: string;

  @ApiProperty({
    description: 'User password'
  })
  @Column({
    nullable: false,
    default: '',
  })
  password: string;
}