import {
  BadRequestException,
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    UsePipes,
    ValidationPipe,
    } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { User } from '../../../typeorm/user.entity';
import { CreateUserDto } from 'src/users/dto/user.dtos';
import { UsersService } from 'src/users/services/users/users.service';
    
    @Controller('users')
    export class UsersController {
      constructor(private readonly userService: UsersService) {}
      
      @ApiOkResponse({
        description: 'Users Fetch Successfully',
        type: [User]
      })
      @Get()
      getUsers() {
        return this.userService.getUsers()
      }
      
      @ApiOkResponse({
        description: 'User Fetch Successfully',
        type: User
      })
      @Get('id/:id')
      findUsersById(@Param('id', ParseIntPipe) id: number) {
        return this.userService.findUsersById(id);
      }
      
      @ApiOkResponse({
        description: 'User Succesfully Register',
        type: User
      })
      @Post('create')
      @UsePipes(ValidationPipe)
      async createUsers(@Body() createUserDto: CreateUserDto) {
        console.log(createUserDto.email);
        
        const user = await this.userService.getUserByEmail(createUserDto.email);
        console.log(user);
        if(user){
          throw new BadRequestException({message: 'Email exists'});
        }
        return this.userService.createUser(createUserDto);
      }
}