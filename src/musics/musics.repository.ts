import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateMusicDto } from "src/dtos/create.music.dto";
import { Repository } from "typeorm";
import { Music } from "./entities/music.entity";

@Injectable()
export class MusicsRepository {
    constructor(@InjectRepository(Music)
    private musicRepo: Repository<Music>) { }

    create(data: CreateMusicDto) {
        const user = this.musicRepo.create(data);
        return this.musicRepo.save(user);
    }

    findAll() {
        return this.musicRepo.find();
    }

    findOne(id: number) {
        return this.musicRepo.findOneBy({ id });
    }

    update(id: number, data: object) {
        return this.musicRepo.update(id, data);
    }

    remove(id: number) {
        return this.musicRepo.delete({ id });
    }
};