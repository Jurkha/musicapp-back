import { Injectable } from '@nestjs/common';
import { CreateMusicDto } from 'src/dtos/create.music.dto';
import { MusicsRepository } from './musics.repository';

@Injectable()
export class MusicsService {
        constructor(private readonly musicRepository: MusicsRepository) { }

    create(data: CreateMusicDto) {
        return this.musicRepository.create(data)
    }

    findAll() {
        return this.musicRepository.findAll()
    }

    findOne(id: number) {
        return this.musicRepository.findOne(id)
    }

    update(id: number, data: object) {
        return this.musicRepository.update(id, data)
    }

    remove(id: number) {
        return this.musicRepository.remove(id)
    }
}
