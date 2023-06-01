import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentService {
    constructor(private readonly prisma: PrismaService) { }

    async createStudent(createStudentDto: CreateStudentDto) {
        const student = await this.prisma.xsxx.create({
            data: createStudentDto
        })
        return {
            items: student
        }
    }

    async updateStudent(updateStudentDto: UpdateStudentDto) {
        const student = await this.prisma.xsxx.updateMany({
            where: {
                snumber: updateStudentDto.snumber
            },
            data: updateStudentDto
        })
        return {
            items: student
        }
    }

    async deleteStudent(snumber: string) {
        const student = await this.prisma.xsxx.deleteMany({
            where: { snumber }
        })
        return {
            items: student
        }
    }
}
