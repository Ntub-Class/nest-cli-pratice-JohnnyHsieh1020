import { Controller, Get, Param, Post, Put, Body, Delete } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly appService: UserService) {}

    @Get()
    getAll(): string {
        return 'Get all ok';
    }

    @Get(':id')
    getOne(@Param('id') id) {
        return 'Get one ok';
    }

    @Post()
    postUser(@Body() body) {
        return 'Post all ok';
    }

    @Put(':id')
    putUser(@Body() body, @Param('id') id) {
        return 'Put one ok';
    }

    @Delete(':id')
    deleteUser(@Param('id') id) {
        return 'Delete one ok';
    }
}
