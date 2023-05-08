import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsPhoneNumber,
  IsNumber,
} from "class-validator";

export class AgentDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  image: string;

  @IsString()
  website: string;

  @IsNumber()
  rating: number;
}
