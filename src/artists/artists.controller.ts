import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { CretateArtistDto } from './dtos/create.artist.dto';

@Controller('artists')
export class ArtistsController {
    constructor(private readonly artistService: ArtistsService) { }

    @Post()
    create(@Body() data: CretateArtistDto) {
        return this.artistService.create(data)
    }
    
    @Get()
    findAll() {
        return this.artistService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.artistService.findOne(id)
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() data: object) {
        return this.artistService.update(id, data)
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.artistService.remove(id)
    }
}
