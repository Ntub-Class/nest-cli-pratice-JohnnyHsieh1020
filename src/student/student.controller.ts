import { Controller, Get, Param, Post, Put, Body, Delete } from '@nestjs/common';
import { StudentService } from './service/student.service';

@Controller('student')
export class StudentController {
    constructor(private readonly appService: StudentService) {}

    @Get()
    getAll(): string {
        return 'Get all ok';
    }

    @Get(':id')
    getOne(@Param('id') id){
        return 'Get one ok';
    }

    @Post()
    postStudent(@Param('body') body){
        return 'Post all ok';
    }

    @Put(':id')
    putStudent(@Param('id') id, @Body() body){
        return 'Put one ok';
    }

    @Delete(':id')
    deleteStudent(@Param('id') id){
        return 'Delete one ok'
    }
}
