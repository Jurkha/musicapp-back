import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CretateArtistDto } from "./dtos/create.artist.dto";
import { Artist } from "./entities/artist.entity";

@Injectable()
export class ArtistsRepository {
    constructor(@InjectRepository(Artist)
    private artistRepo: Repository<Artist>) { }

    create(data: CretateArtistDto) {
        const artist = this.artistRepo.create(data);
        return this.artistRepo.save(artist);
    }

    findAll() {
        return this.artistRepo.find();
    }

    findOne(id: number) {
        return this.artistRepo.findOneBy({id});
    }

    update(id: number, data: object) {
        return this.artistRepo.update(id, data);
    }
    
    remove(id: number) {
        return this.artistRepo.delete({id});
    }
};