import { UserGroupModel, UserGroupType } from '@entities/user-group';
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { UserGroupRepositoryInterface } from '@repositories/user-group';
import { CreateUserGroupDto } from '@modules/user-groups/dtos';

@Injectable()
export class UserGroupService {
  constructor(
    @Inject(UserGroupModel.name)
    private readonly userGroupRepository: UserGroupRepositoryInterface,
  ) {}

  //   async getAll(getAllUsersDto: GetAllUsersDto) {
  //     const usersData = await this.userGroupRepository.getAll(getAllUsersDto);
  //     return usersData;
  //   }

  async newOne(createUserGroupDto: CreateUserGroupDto): Promise<UserGroupType> {
    let createdUserGroup: UserGroupType;
    try {
      createdUserGroup = await this.userGroupRepository.newOne(
        createUserGroupDto,
      );
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return createdUserGroup;
  }
}
