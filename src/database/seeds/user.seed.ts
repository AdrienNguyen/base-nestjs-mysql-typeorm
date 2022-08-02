import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { User } from '../../entities/user/user.entity';
import { hashPassword } from '../../cores/utils/bcrypt';

export default class UserSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        {
          username: 'phuong01',
          email: 'phuong01@gmail.com',
          password: await hashPassword('123456'),
        },
        {
          username: 'phuong02',
          email: 'phuong02@gmail.com',
          password: await hashPassword('123456'),
        },
      ])
      .execute();
  }
}
