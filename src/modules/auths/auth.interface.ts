import { UserType } from '@entities/user';

export interface LoginResponseData {
  accessToken: string;
  refreshToken: string;
  userData: UserType;
}

export interface GenerateAccessJWTData {
  accessToken: string;
}
