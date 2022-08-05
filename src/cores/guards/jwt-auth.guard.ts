import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { verifyAccessJWT } from '@cores/utils/jwt';
import { Reflector } from '@nestjs/core';
import { PERMISSION_KEY } from '@cores/decorators/permission.decorator';
import * as _ from 'lodash';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const permissionKey = this.reflector.get<string>(
        PERMISSION_KEY,
        context.getHandler(),
      );

      if (!permissionKey) {
        return false;
      }

      if (permissionKey === 'public') {
        return true;
      }

      const request = context.switchToHttp().getRequest();
      const bearerHeader = request.headers.authorization;

      if (!bearerHeader) {
        throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
      }

      const bearer = bearerHeader.split(' ');
      const token = bearer[1];

      const payload = await verifyAccessJWT(token);

      const userPermissions = _.get(payload, 'permissionKeys', []);

      if (payload && userPermissions.includes(permissionKey)) {
        request.user = payload;
        return true;
      }
      return false;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
    }
  }
}
