import { UserType } from '@entities/user';
import { BaseRepositoryInterface } from '@repositories/base.repository.inteface';

export interface UserRepositoryInterface
  extends BaseRepositoryInterface<UserType> {
  findUserByEmail(email: string): Promise<UserType>;
}
