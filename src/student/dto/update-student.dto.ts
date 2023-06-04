import { IsIn, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from "class-validator"

export class UpdateStudentDto {
    @IsNotEmpty()
    @IsString()
    snumber: string

    @IsOptional()
    @IsString()
    name: string

    @IsOptional()
    @IsString()
    @IsIn(['男', '女'])
    gender: string

    @IsOptional()
    @IsNumber()
    class: number

    @IsOptional()
    @IsNumber()
    @Min(0)
    age: number
}