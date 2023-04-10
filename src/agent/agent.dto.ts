import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsPhoneNumber,
  IsOptional,
  IsNumber,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class AgentDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  phone: string;

  @IsOptional()
  @IsString()
  @Transform((image) => image || undefined)
  image?: string;

  @IsOptional()
  @IsNumber()
  rating?: number;
}
