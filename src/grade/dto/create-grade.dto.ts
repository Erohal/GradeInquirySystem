import { IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator"

export class CreateGradeDto {
    @IsNotEmpty({
        message: '学号不能为空'
    })
    @IsString({
        message: '学号必须是字符串类型'
    })
    snumber: string

    @IsNotEmpty({
        message: '课程ID不能为空'
    })
    @IsString({
        message: '课程ID必须为字符串类型'
    })
    kcid: string

    @IsNotEmpty({
        message: '成绩不能为空'
    })
    @IsNumber()
    @Min(0, {
        message: '成绩最小值为0'
    })
    @Max(100, {
        message: '成绩最大值为100'
    })
    grade: number
}