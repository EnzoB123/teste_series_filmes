import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {Movies} from '../models';
import {MoviesRepository} from '../repositories';

export class MovieController {
  constructor(
    @repository(MoviesRepository)
    public userRepository: MoviesRepository,
  ) { }

  @post('/movies')
  @response(200, {
    description: 'Movies model instance',
    content: {'application/json': {schema: getModelSchemaRef(Movies)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Movies, {
            title: 'NewMovies',
            exclude: ['movieId'],
          }),
        },
      },
    })
    movies: Omit<Movies, 'movieId'>,
  ): Promise<Movies> {
    return this.userRepository.create(movies);
  }

  @get('/movies/count')
  @response(200, {
    description: 'Movies model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Movies) where?: Where<Movies>,
  ): Promise<Count> {
    return this.userRepository.count(where);
  }

  @get('/movies')
  @response(200, {
    description: 'Array of Movies model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Movies, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Movies) filter?: Filter<Movies>,
  ): Promise<Movies[]> {
    return this.userRepository.find(filter);
  }

  @patch('/movies')
  @response(200, {
    description: 'Movies PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Movies, {partial: true}),
        },
      },
    })
    movies: Movies,
    @param.where(Movies) where?: Where<Movies>,
  ): Promise<Count> {
    return this.userRepository.updateAll(movies, where);
  }

  @get('/movies/{movieId}')
  @response(200, {
    description: 'Movies model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Movies, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('movieId') movieId: string,
    @param.filter(Movies, {exclude: 'where'}) filter?: FilterExcludingWhere<Movies>
  ): Promise<Movies> {
    return this.userRepository.findById(movieId, filter);
  }

  @patch('/movies/{movieId}')
  @response(204, {
    description: 'Movies PATCH success',
  })
  async updateById(
    @param.path.string('movieId') movieId: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Movies, {partial: true}),
        },
      },
    })
    movies: Movies,
  ): Promise<void> {
    await this.userRepository.updateById(movieId, movies);
  }

  @put('/movies/{movieId}')
  @response(204, {
    description: 'Movies PUT success',
  })
  async replaceById(
    @param.path.string('movieId') movieId: string,
    @requestBody() movies: Movies,
  ): Promise<void> {
    await this.userRepository.replaceById(movieId, movies);
  }

  @del('/movies/{movieId}')
  @response(204, {
    description: 'Movies DELETE success',
  })
  async deleteById(@param.path.string('movieId') movieId: string): Promise<void> {
    await this.userRepository.deleteById(movieId);
  }

  // Add a user's movieId to the likes array of a movie
  @post('/movies/{movieId}/likes/{userId}')
  async likeMovie(
    @param.path.string('movieId') movieId: string,
    @param.path.string('userId') userId: string,
  ): Promise<Movies> {
    const movie = await this.userRepository.findById(movieId);
    movie.likes.push(userId);
    await this.userRepository.update(movie);
    return movie;
  }


}
