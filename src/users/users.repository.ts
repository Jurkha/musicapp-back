import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "src/dtos/create.user.dto";

@Injectable()
export class UsersRepository {
    constructor(@InjectRepository(User)
    private userRepo: Repository<User>) { }
    findAll() {
        return this.userRepo.find();
    }

    findOne(id: number) {
        return this.userRepo.findOneBy({id});
    }

    update(id: number, data: object) {
        return this.userRepo.update(id, data);
    }
    
    create(data: CreateUserDto) {
        const user = this.userRepo.create(data);
        return this.userRepo.save(user);
    }

    remove(id: number) {
        return this.userRepo.delete({id});
    }
};