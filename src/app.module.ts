import { Module } from '@nestjs/common';
import { StudentModule } from './student/student.module';
import { GradeModule } from './grade/grade.module';
import { CourseModule } from './course/course.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [StudentModule, GradeModule, CourseModule, PrismaModule]
})
export class AppModule {}
