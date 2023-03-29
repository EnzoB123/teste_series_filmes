import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Movies extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  movieId?: string;

  @property({
    type: 'string',
    required: true,
  })
  userId: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  liked?: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  disliked?: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  followers?: string[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Movies>) {
    super(data);
  }
}

export interface MoviesRelations {
  // describe navigational properties here
}

export type MoviesWithRelations = Movies & MoviesRelations;
