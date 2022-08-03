import { PermissionType } from '@entities/permission';
import { BaseRepositoryInterface } from '@repositories/base.repository.inteface';

export interface PermissionRepositoryInterface
  extends BaseRepositoryInterface<PermissionType> {}
