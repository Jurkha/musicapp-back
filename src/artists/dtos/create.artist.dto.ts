import { IsString } from "class-validator";

export class CretateArtistDto {
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsString()
    musics: string;

    @IsString()
    biography: string;
}
