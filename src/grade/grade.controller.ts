import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { GradeService } from './grade.service';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';

@Controller('grade')
export class GradeController {
    constructor(private readonly gradeService: GradeService) { }

    @Get('rank')
    rank() {
        return this.gradeService.rank()
    }

    @Get('list')
    listGrade() {
        return this.gradeService.listGrades()
    }

    @Post('create')
    createGrade(@Body() createGradeDto: CreateGradeDto) {
        return this.gradeService.createGrade(createGradeDto)
    }

    @Delete('delete/:snumber/:kcid')
    deleteGrade(@Param('snumber') snumber: string, @Param('kcid') kcid: string) {
        return this.gradeService.deleteGrade(snumber, kcid)
    }

    @Post('update')
    updateGrade(@Body() updateGradeDto: UpdateGradeDto) {
        return this.gradeService.updateGrade(updateGradeDto)
    }
}
