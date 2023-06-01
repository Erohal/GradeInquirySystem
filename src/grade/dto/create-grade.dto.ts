import { IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator"

export class CreateGradeDto {
    @IsNotEmpty()
    @IsString()
    snumber: string

    @IsNotEmpty()
    @IsString()
    kcid: string

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    @Max(100)
    grade: number
}