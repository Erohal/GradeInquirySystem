import { IsIn, IsNotEmpty, IsNumber, IsString, Min } from "class-validator"

export class UpdateStudentDto {
    @IsNotEmpty()
    @IsString()
    snumber: string

    @IsString()
    name: string

    @IsString()
    @IsIn(['男', '女'])
    gender: string

    @IsNumber()
    class: number

    @IsNumber()
    @Min(0)
    age: number
}