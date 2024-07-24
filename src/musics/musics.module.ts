import { Module } from '@nestjs/common';
import { MusicService } from './musics.service';
import { MusicController } from './musics.controller';
import { Music } from './entities/music.entity';
import { MusicsRepository } from './musics.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Music])],
  providers: [MusicService, MusicsRepository],
  controllers: [MusicController],
})
export class MusicModule {}
