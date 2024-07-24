import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtistsModule } from './artists/artists.module';

@Module({
  imports: [UsersModule,ArtistsModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'error404_base',
    entities: [],
    autoLoadEntities: true,
    synchronize: true,
  }), ArtistsModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
