import { UserModel, UserType } from '@entities/user';
import { CreateUserDto, GetAllUsersDto } from '@modules/users/dtos';
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { UserRepositoryInterface } from '@repositories/user';

@Injectable()
export class UserService {
  constructor(
    @Inject(UserModel.name)
    private readonly userRepository: UserRepositoryInterface,
  ) {}

  async getAll(getAllUsersDto: GetAllUsersDto) {
    const usersData = await this.userRepository.getAll(getAllUsersDto);
    return usersData;
  }

  async newOne(createUserDto: CreateUserDto): Promise<UserType> {
    const { email } = createUserDto;

    const user = await this.userRepository.getOne({ email });

    if (user) {
      throw new HttpException(
        'User already exists. Please try again later',
        HttpStatus.CONFLICT,
      );
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
