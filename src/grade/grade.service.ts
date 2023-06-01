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

    async createGrade(createGradeDto: CreateGradeDto) {
        const grade = await this.prisma.xxxx.create({
            data: createGradeDto
        })
        return {
            item: grade
        }
    }

    async updateGrade(updateGradeDto: UpdateGradeDto) {
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
            items: grade
        }
    }
}
