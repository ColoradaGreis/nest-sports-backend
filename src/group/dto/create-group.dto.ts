import { IsNotEmpty, IsOptional, IsArray, IsString } from 'class-validator';

export class CreateGroupDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  owner: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  members?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  matches?: string[];
}
