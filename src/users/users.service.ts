import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/create.user.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
    constructor(private readonly userRepository: UsersRepository) { }
    findAll() {
        return this.userRepository.findAll()
    }

    findOne(id: number) {
        return this.userRepository.findOne(id)
    }

    update(id: number, data: object) {
        return this.userRepository.update(id, data)
    }

    create(data: CreateUserDto) {
        return this.userRepository.create(data)
    }

    remove(id: number) {
        return this.userRepository.remove(id)
    }
}
