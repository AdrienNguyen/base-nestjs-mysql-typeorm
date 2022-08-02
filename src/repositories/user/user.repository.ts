import { CustomRepository } from '@cores/decorators/custom-repository.decorator';
import { hashPassword } from '@cores/utils/bcrypt';
import { User } from '@entities/user/user.entity';
import { CreateUserDto, GetAllUsersDto } from '@modules/users/dtos';
import { BaseRepository } from '@repositories/base.repository';
import { UserRepositoryInterface } from '@repositories/user/user.repository.inteface';
import { paginate } from 'nestjs-typeorm-paginate';

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
}
