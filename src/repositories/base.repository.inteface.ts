export interface BaseRepositoryInterface<T> {
  getOne(options?: any): Promise<T>;
  getAll(options?: any): any;
  newOne(data: any): Promise<T>;
  deleteOne(id: any): Promise<T>;
}
