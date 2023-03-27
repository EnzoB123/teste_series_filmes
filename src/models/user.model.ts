import {Entity, model, property} from '@loopback/repository';


@model({settings: {strict: false}})
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
    mongodb: { dataType: 'ObjectId' }
  })
  userId?: string;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'date',
    required: false,
    defaultFn: 'now',
    mongodb: { dataType: 'Date' }
  })
  dataCriacao?: Date;

  @property({
    type: 'date',
  })
  dataAtualizacao?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  preferencias?: string[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<User>) {

    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelatons = User & UserRelations;
