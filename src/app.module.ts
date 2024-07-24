import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MusicsModule } from './musics/musics.module';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'error404_base',
    entities: [],
    autoLoadEntities: true,
    synchronize: true,
  }), MusicsModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
