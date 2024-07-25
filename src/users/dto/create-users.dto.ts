import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @MinLength(8)
  password: string;

  @IsNotEmpty()
  first_lastname: string;

  @IsOptional()
  second_lastname: string | null;

  @IsNotEmpty()
  first_name: string;

  @IsOptional()
  second_name: string | null;
}
