import { LoginByPasswordDto, RefreshTokenDto } from '@modules/auths/dtos';
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';

import {
  generateAccessJWT,
  generateRefreshJWT,
  verifyRefreshJWT,
} from '@cores/utils/jwt';

import { comparePassword } from '@cores/utils/bcrypt';

import { UserModel, UserType } from '@entities/user';
import {
  GenerateAccessJWTData,
  LoginResponseData,
} from '@modules/auths/auth.interface';
import { UserRepositoryInterface } from '@repositories/user';
import { UserGroupModel } from '@entities/user-group';
import { UserGroupRepositoryInterface } from '@repositories/user-group';

@Injectable()
export class AuthService {
  constructor(
    @Inject(UserModel.name)
    private readonly userRepository: UserRepositoryInterface,
    @Inject(UserGroupModel.name)
    private readonly userGroupRepository: UserGroupRepositoryInterface,
  ) {}

  async loginByPassword(
    loginByPasswordDto: LoginByPasswordDto,
  ): Promise<LoginResponseData> {
    const { email } = loginByPasswordDto;

    const user = await this.userRepository.findUserByEmail(email);

    if (!user) {
      throw new HttpException('User does not exist', HttpStatus.NOT_FOUND);
    }

    const checkPassword = await comparePassword(
      loginByPasswordDto.password,
      user.password,
    );
    if (!checkPassword) {
      throw new HttpException(
        'Invalid credentials. Please try again',
        HttpStatus.FORBIDDEN,
      );
    }

    const { userData, accessToken, refreshToken } =
      await this.generateResponseLoginData(user);

    return {
      userData,
      accessToken,
      refreshToken,
    };
  }

  async generateResponseLoginData(user: UserType): Promise<LoginResponseData> {
    let accessToken;
    let refreshToken;
    let userData;
    try {
      const groupId = user.groupId;
      const permissionKeys =
        await this.userGroupRepository.getPermissionsByUserGroupId(groupId);

      userData = { ...user, permissionKeys };
      delete userData.password;
      accessToken = generateAccessJWT(userData, {
        expiresIn: Number(process.env.ACCESS_TOKEN_EXPIRE_IN_SEC),
      });
      refreshToken = generateRefreshJWT(userData, {
        expiresIn: Number(process.env.REFRESH_TOKEN_EXPIRE_IN_SEC),
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return {
      userData,
      accessToken,
      refreshToken,
    };
  }

  async generateNewAccessJWT(
    refreshTokenDto: RefreshTokenDto,
  ): Promise<GenerateAccessJWTData> {
    const refreshToken = refreshTokenDto.refreshToken;

    let payload;
    try {
      payload = await verifyRefreshJWT(refreshToken);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
    }

    const accessToken = generateAccessJWT(payload);

    return { accessToken };
  }
}
