import { IsDateString, IsEmail, IsString, IsUrl } from "class-validator";

export class CreateUserDto {
    @IsString()
    name: string;

    @IsUrl()
    url: string;

    @IsEmail()
    email: string;

    @IsString()
    phone: string;
    
    @IsDateString()
    birthDate: string;
};