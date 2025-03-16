import { IsString } from 'class-validator';

export class UsersDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  password: string;
}
