import { IsIn, IsNotEmpty, IsNumber, IsString, Min } from "class-validator"

export class CreateStudentDto {
    @IsNotEmpty()
    @IsString()
    snumber: string

    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    @IsIn(['男', '女'])
    gender: string

    @IsNotEmpty()
    @IsNumber()
    class: number

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    age: number
}