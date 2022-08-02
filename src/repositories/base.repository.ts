import {
  IPaginationMeta,
  IPaginationOptions,
  paginate,
} from 'nestjs-typeorm-paginate';
import { BaseEntity, Repository } from 'typeorm';

export class BaseRepository<Entity extends BaseEntity> {
  protected readonly model: Repository<Entity>;

  constructor(model: Repository<Entity>) {
    this.model = model;
  }

  async getAll(options: any): Promise<
    | Entity[]
    | {
        items: Entity[];
        meta: IPaginationMeta;
      }
  > {
    const { page, limit } = options;
    if (!page || !limit) {
      return this.model.find({
        where: options,
      });
    }

    return paginate(this.model, options);
  }

  async getOne(options: any): Promise<Entity> {
    return this.model.findOneBy(options);
  }

  async newOne(data: Entity): Promise<Entity> {
    const entityCreated = await this.model.create(data);
    await entityCreated.save();
    return entityCreated;
  }
}
