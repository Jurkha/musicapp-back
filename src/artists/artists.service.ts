import { Injectable } from '@nestjs/common';
import { ArtistsRepository } from './artists.repository';
import { CretateArtistDto } from './dtos/create.artist.dto';

@Injectable()
export class ArtistsService {
    constructor(private readonly artistRepository: ArtistsRepository) { }

    create(data: CretateArtistDto) {
        return this.artistRepository.create(data)
    }
    
    findAll() {
        return this.artistRepository.findAll()
    }

    findOne(id: number) {
        return this.artistRepository.findOne(id)
    }

    update(id: number, data: object) {
        return this.artistRepository.update(id, data)
    }

    remove(id: number) {
        return this.artistRepository.remove(id)
    }
}
