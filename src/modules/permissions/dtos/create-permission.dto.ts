import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePermissionDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'index_user',
  })
  key: string;

  @IsString()
  @IsOptional()
  description?: string;
}
