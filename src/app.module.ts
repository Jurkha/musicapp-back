import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtistsModule } from './artists/artists.module';
import { MusicModule } from './musics/musics.module';

@Module({
  imports: [UsersModule,ArtistsModule,MusicModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'error404_base',
    entities: [],
    autoLoadEntities: true,
    synchronize: true,
  }), ArtistsModule, MusicModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
