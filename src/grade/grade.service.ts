import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';

@Injectable()
export class GradeService {
    constructor(private readonly prisma: PrismaService) { }

    async rank() {
        const rank = await this.prisma.cjpm.findMany();
        return {
            items: rank
        }
    }

    async listGrades() {
        const grades = await this.prisma.$queryRaw`SELECT *, xsxx.name as student_name FROM xsxx INNER JOIN xxxx ON xxxx.snumber=xsxx.snumber INNER JOIN kc ON kc.kcid=xxxx.kcid`
        return {
            items: grades
        }
    }

    async createGrade(createGradeDto: CreateGradeDto) {
        if (!await this.prisma.xsxx.findFirst({where: {snumber: createGradeDto.snumber}})) {
            throw Error('创建成绩失败: 该学生不存在')
        }
        const grade = await this.prisma.xxxx.create({
            data: createGradeDto
        })
        return grade
    }

    async updateGrade(updateGradeDto: UpdateGradeDto) {
        if (!await this.prisma.xsxx.findFirst({where: {snumber: updateGradeDto.snumber}})) {
            throw Error('更新成绩失败: 该学生不存在')
        }
        const grade = await this.prisma.xxxx.updateMany({
            where: {
                snumber: updateGradeDto.snumber,
                kcid: updateGradeDto.kcid
            },
            data: updateGradeDto
        })
        return {
            items: grade
        }
    }

    async deleteGrade(snumber: string, kcid: string) {
        const grade = await this.prisma.xxxx.deleteMany({
            where: { snumber, kcid }
        })
        return {
            status: grade.count == 1 ? '删除成功' : '删除失败'
        }
    }
}
