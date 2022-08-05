import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class AddPermissionsDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: 1,
  })
  permissionId: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: 1,
  })
  userGroupId: number;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'This is description of user group permission record',
  })
  description: string;
}
