import {inject} from '@loopback/core';
import {DefaultCrudRepository, repository, } from '@loopback/repository';
import {DatabaseDataSource} from '../datasources';
import {Movies, MoviesRelations, UserRelations} from '../models';
import { UserRepository } from "../repositories";

export class MoviesRepository extends DefaultCrudRepository<
  Movies,
  typeof Movies.prototype.id,
  MoviesRelations
> {
  constructor(
    @inject('datasources.database') dataSource: DatabaseDataSource,
    @repository(UserRepository) protected userRepository: UserRepository,
  ) {
    super(Movies, dataSource);
  }

  async getLikedRating(userId: string): Promise<number> {
    const likedMovies = await this.find({
      where: {
        likes: { like: userId },
      },
    });

    const dislikedMovies = await this.find({
      where: {
        dislikes: { like: userId },
      },
    });

    const rating = likedMovies.length - dislikedMovies.length;
    return rating;
  }
}
