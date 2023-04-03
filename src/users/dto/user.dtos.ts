import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDto {
  @ApiProperty({
    description: 'valid user name',
    example: 'Test1881'
  })
  @IsNotEmpty()
  @MinLength(3)
  username: string;

  @ApiProperty({
    description: 'valid Password',
    example: 'Test@1881'
  })
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @ApiProperty({
    description: 'valid Email',
    example: 'test@gmail.com'
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;
}