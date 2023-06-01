import { IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator"

export class UpdateGradeDto {
    @IsNotEmpty()
    @IsString()
    snumber: string

    @IsString()
    kcid: string

    @IsNumber()
    @Min(0)
    @Max(100)
    grade: number
}