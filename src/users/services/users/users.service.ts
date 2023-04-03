import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../typeorm/user.entity';
import { CreateUserDto } from 'src/users/dto/user.dtos';
import { Repository } from 'typeorm';
import { encodePassword } from 'src/util.js/password';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
    ) { }

    createUser(createUserDto: CreateUserDto) {
        const encodePwd = encodePassword(createUserDto.password);
        createUserDto.password = encodePwd;
        const newUser = this.userRepository.create(createUserDto);
        return this.userRepository.save(newUser);
    }
    findUsersById(id: number) {
        return this.userRepository.findOne({ where: { id: id } });
    }
    getUsers(){
        return this.userRepository.find();
    }
    getUserByEmail(email: string){
        return this.userRepository.findOne({ where: { email: email } });
    }
}
