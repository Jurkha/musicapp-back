import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateMusicDto } from 'src/dtos/create.music.dto';
import { MusicsService } from './musics.service';

@Controller('musics')
export class MusicsController {
    constructor(private readonly musicService: MusicsService) { }

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
