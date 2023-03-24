import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Usuario extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
    mongodb: { dataType: 'ObjectId' }
  })
  id?: string;

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
  senha: string;

  @property({
    type: 'date',
    required: false,
    defaultFn: 'now',
    mongodb: { dataType: 'Date' }
  })
  data_criacao?: Date;

  @property({
    type: 'date',
  })
  data_atualizacao?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  preferencias?: string[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}

export interface UsuarioRelations {
  // describe navigational properties here
}

export type UsuarioWithRelatons = Usuario & UsuarioRelations;
