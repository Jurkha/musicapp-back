import { IsDateString, IsEmail, IsString, IsUrl } from "class-validator";

export class CreateMusicDto {
    @IsString()
    name: string;

    @IsUrl()
    url: string;
    
};