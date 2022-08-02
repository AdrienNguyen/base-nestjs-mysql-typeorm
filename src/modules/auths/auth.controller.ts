import { AuthService } from '@modules/auths/auth.service';
import { LoginByPasswordDto, RefreshTokenDto } from '@modules/auths/dtos';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('auths')
@ApiTags('auths')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login-by-password')
  @HttpCode(HttpStatus.OK)
  async loginByPassword(@Body() loginByPasswordDto: LoginByPasswordDto) {
    const loginData = await this.authService.loginByPassword(
      loginByPasswordDto,
    );
    return {
      success: true,
      content: loginData,
    };
  }

  @Post('refresh-token')
  @HttpCode(HttpStatus.CREATED)
  async generateNewAccessJWT(@Body() refreshTokenDto: RefreshTokenDto) {
    const newAccessToken = await this.authService.generateNewAccessJWT(
      refreshTokenDto,
    );
    return {
      success: true,
      content: newAccessToken,
    };
  }
}
