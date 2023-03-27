import {inject} from '@loopback/core';
import {DefaultCrudRepository, repository, } from '@loopback/repository';
import {DatabaseDataSource} from '../datasources';
import {Movies, MoviesRelations,} from '../models';
import { UserRepository } from "../repositories";

export class MoviesRepository extends DefaultCrudRepository<
  Movies,
  typeof Movies.prototype.movieId,
  MoviesRelations
> {
  constructor(
    @inject('datasources.database') dataSource: DatabaseDataSource,
    @repository(UserRepository) protected userRepository: UserRepository,
  ) {
    super(Movies, dataSource);
  }

}
