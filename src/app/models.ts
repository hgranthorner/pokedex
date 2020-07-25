export type Pokemon = { id: number; name: string; url: string }
export type AllPokemonDto = {
  count: number
  next: string
  previous: string
} & Pokemon[]
export const JavascriptTypes = {
  Undefined: 'undefined',
  Boolean: 'boolean',
  Number: 'number',
  String: 'string',
  Bigint: 'bigint',
  Symbol: 'symbol',
  Object: 'object',
}

export enum JavascriptTypesEnum {
  Undefined = 'undefined',
  Boolean = 'boolean',
  Number = 'number',
  String = 'string',
  Bigint = 'bigint',
  Symbol = 'symbol',
  Object = 'object',
}
export type LocalStorageData = {
  type: JavascriptTypesEnum
  value: string
}
export const LocalStorageKeys = {
  Pokemon: 'pokemon',
}

export enum LocalStorageKeysEnum {
  Pokemon = 'pokemon',
}
