import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dtos/create.user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Post()
    create(@Body() data: CreateUserDto) {
        return this.userService.create(data)
    }
    
    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.userService.findOne(id)
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() data: object) {
        return this.userService.update(id, data)
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.userService.remove(id)
    }
}
