import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Movies} from '../models';
import {MoviesRepository} from '../repositories';

export class MovieController {
  constructor(
    @repository(MoviesRepository)
    public userRepository : MoviesRepository,
  ) {}

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
            exclude: ['id'],
          }),
        },
      },
    })
    movies: Omit<Movies, 'id'>,
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

  @get('/movies/{id}')
  @response(200, {
    description: 'Movies model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Movies, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Movies, {exclude: 'where'}) filter?: FilterExcludingWhere<Movies>
  ): Promise<Movies> {
    return this.userRepository.findById(id, filter);
  }

  @patch('/movies/{id}')
  @response(204, {
    description: 'Movies PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Movies, {partial: true}),
        },
      },
    })
    movies: Movies,
  ): Promise<void> {
    await this.userRepository.updateById(id, movies);
  }

  @put('/movies/{id}')
  @response(204, {
    description: 'Movies PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() movies: Movies,
  ): Promise<void> {
    await this.userRepository.replaceById(id, movies);
  }

  @del('/movies/{id}')
  @response(204, {
    description: 'Movies DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.userRepository.deleteById(id);
  }
}
