import { UserModel, UserType } from '@entities/user';
import { UserGroupModel } from '@entities/user-group';
import { CreateUserDto, GetAllUsersDto } from '@modules/users/dtos';
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { UserRepositoryInterface } from '@repositories/user';
import { UserGroupRepositoryInterface } from '@repositories/user-group';

@Injectable()
export class UserService {
  constructor(
    @Inject(UserModel.name)
    private readonly userRepository: UserRepositoryInterface,
    @Inject(UserGroupModel.name)
    private readonly userGroupRepository: UserGroupRepositoryInterface,
  ) {}

  async getAll(getAllUsersDto: GetAllUsersDto) {
    const usersData = await this.userRepository.getAll(getAllUsersDto);
    return usersData;
  }

  async newOne(createUserDto: CreateUserDto): Promise<UserType> {
    const { email, groupId } = createUserDto;

    const user = await this.userRepository.getOne({ email });

    if (user) {
      throw new HttpException(
        'User already exists. Please try again later',
        HttpStatus.CONFLICT,
      );
    }

    if (groupId) {
      const userGroup = await this.userGroupRepository.getOne({
        id: groupId,
      });
      if (!userGroup) {
        throw new HttpException(
          'GroupId does not exist.Please try again later',
          HttpStatus.NOT_FOUND,
        );
      }
    }

    let createdUser: UserType;
    try {
      createdUser = await this.userRepository.newOne(createUserDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return createdUser;
  }
}
