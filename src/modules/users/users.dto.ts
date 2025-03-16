import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class UsersDto {
  @IsString()
  @IsOptional()
  name?: string | null;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
