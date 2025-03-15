import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class WorksDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsString()
  @IsOptional()
  publisher?: string | null;

  @IsString()
  @IsOptional()
  image?: string | null;
}
