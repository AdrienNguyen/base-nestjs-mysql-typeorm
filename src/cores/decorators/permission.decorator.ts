import { SetMetadata } from '@nestjs/common';

export const PERMISSION_KEY = 'PERMISSION_KEY';

export const Permission = (permission: string) =>
  SetMetadata(PERMISSION_KEY, permission);
