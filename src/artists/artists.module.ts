import { Module } from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { ArtistsController } from './artists.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Artist } from './entities/artist.entity';
import { ArtistsRepository } from './artists.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Artist])],
  providers: [ArtistsService, ArtistsRepository],
  controllers: [ArtistsController]
})
export class ArtistsModule {}
