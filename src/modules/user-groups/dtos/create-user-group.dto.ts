import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserGroupDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'admin',
  })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'This is admin of system',
  })
  description: string;
}
