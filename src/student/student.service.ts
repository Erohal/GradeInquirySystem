import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentService {
    constructor(private readonly prisma: PrismaService) { }

    async findOne(snumber: string) {
        const student = await this.prisma.xsxx.findFirst({
            where: { snumber }
        })
        if (!student) throw Error('该学生不存在')
        return student
    }

    async listStudent() {
        const students = await this.prisma.xsxx.findMany();
        return {
            items: students
        }
    }

    async createStudent(createStudentDto: CreateStudentDto) {
        if (await this.prisma.xsxx.findFirst({where: {snumber: createStudentDto.snumber}})) {
            throw Error('创建失败: 用户已存在')
        }
        const student = await this.prisma.xsxx.create({
            data: createStudentDto
        })
        return student
    }

    async updateStudent(updateStudentDto: UpdateStudentDto) {
        if (!await this.prisma.xsxx.findFirst({where: {snumber: updateStudentDto.snumber}})) {
            throw Error('更新失败: 用户不存在')
        }
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
            status: student.count == 1 ? '删除成功': '删除失败'
        }
    }
}
