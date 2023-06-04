import { IsIn, IsNotEmpty, IsNumber, IsString, Min } from "class-validator"

export class CreateStudentDto {
    @IsNotEmpty({
        message: '学号不能为空'
    })
    @IsString({
        message: '学号必须是字符串类型'
    })
    snumber: string

    @IsNotEmpty({
        message: '姓名不能为空'
    })
    @IsString({
        message: '姓名必须是字符串类型'
    })
    name: string

    @IsNotEmpty({
        message: '性别不能为空'
    })
    @IsString({
        message: '性别必须是字符串类型'
    })
    @IsIn(['男', '女'], {
        message: '性别必须是男或女'
    })
    gender: string

    @IsNotEmpty({
        message: '班级不能为空'
    })
    @IsNumber()
    class: number

    @IsNotEmpty({
        message: '年龄不能为空'
    })
    @IsNumber()
    @Min(0, {
        message: '年龄不能小于0'
    })
    age: number
}