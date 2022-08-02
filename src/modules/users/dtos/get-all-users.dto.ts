import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class GetAllUsersDto {
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  @ApiProperty({
    example: 1,
  })
  page: number;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  @ApiProperty({
    example: 10,
  })
  limit: string;
}
