import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { MusicService } from './musics.service';
import { CreateMusicDto } from './dtos/create.music.dto';

@Controller('musics')
export class MusicController {
    constructor(private readonly musicService: MusicService) { }

    @Post()
    create(@Body() data: CreateMusicDto) {
        return this.musicService.create(data)
    }
    
    @Get()
    findAll() {
        return this.musicService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.musicService.findOne(id)
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() data: object) {
        return this.musicService.update(id, data)
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.musicService.remove(id)
    }
}
