import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CourseService {
    constructor(private readonly prisma: PrismaService) { }

    async listCourses() {
        const courses = await this.prisma.kc.findMany()
        return {
            items: courses
        }
    }
}
