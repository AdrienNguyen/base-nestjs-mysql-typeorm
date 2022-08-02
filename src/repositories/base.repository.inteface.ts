export interface BaseRepositoryInterface {
  getOne(options?: any);
  getAll(options?: any);
  newOne(data: any);
}
