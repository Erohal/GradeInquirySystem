import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentService } from './student.service';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) { }

    @Get('find/:snumber')
    findOne(@Param('snumber') snumber: string) {
        return this.studentService.findOne(snumber)
    }

    @Get('list')
    listStudent() {
        return this.studentService.listStudent()
    }

    @Post('create')
    createStudent(@Body() createStudentDto: CreateStudentDto) {
        return this.studentService.createStudent(createStudentDto)
    }

    @Delete('delete/:snumber')
    deleteStudent(@Param('snumber') snumber: string) {
        return this.studentService.deleteStudent(snumber)
    }

    @Post('update')
    updateStudent(@Body() updateStudentDto: UpdateStudentDto) {
        return this.studentService.updateStudent(updateStudentDto)
    }
}
