import { Controller, Get, Param, Body, Post, Put, Delete } from '@nestjs/common';
import { NewsService } from './news.service';
@Controller('news')
export class NewsController {
    constructor(private readonly appService: NewsService) {}

    @Get()
    getAll(): string {
        return 'Get all ok';
    }

    @Get(':id')
    getOneUser(@Param('id') id){
        return 'Get one ok';
    }

    @Post()
    postNews(@Body() body) {
        return "Post all ok";
    }

    @Put(':id')
    putNews(@Body() body, @Param('id') id) {
        return 'Put all ok';
    }

    @Delete(':id')
    deleteNews(@Param('id') id) {
        return 'Delete one ok';
    }
}
