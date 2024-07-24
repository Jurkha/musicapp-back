import { Injectable } from '@nestjs/common';
import { MusicsRepository } from './musics.repository';
import { CreateMusicDto } from './dtos/create.music.dto';

@Injectable()
export class MusicService {
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
