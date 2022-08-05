import { CustomRepository } from '@cores/decorators/custom-repository.decorator';
import { hashPassword } from '@cores/utils/bcrypt';
import { User } from '@entities/user/user.entity';
import { CreateUserDto } from '@modules/users/dtos';
import { BaseRepository } from '@repositories/base.repository';
import { UserRepositoryInterface } from '@repositories/user/user.repository.inteface';

@CustomRepository(User)
export class UserRepository
  extends BaseRepository<User>
  implements UserRepositoryInterface
{
  async newOne(createUserDto: CreateUserDto): Promise<User> {
    const { password } = createUserDto;
    const encryptedPassword = await hashPassword(password);
    createUserDto.password = encryptedPassword;

    const createdUser = await this.model.create(createUserDto);
    await createdUser.save();

    return createdUser;
  }

  async findUserByEmail(email: string): Promise<User> {
    const user = await this.model
      .createQueryBuilder('users')
      .select([
        'users.id',
        'users.email',
        'users.password',
        'users.username',
        'users.groupId',
      ])
      .where(`users.email = :email`, { email })
      .getOne();
    return user;
  }
}
