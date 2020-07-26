export type BasicPokemon = { id: number; name: string; url: string }
export type AllPokemonDto = {
  count: number
  next: string
  previous: string
} & BasicPokemon[]
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

export interface AbilityInfo {
  name: string
  url: string
}

export interface Ability {
  ability: AbilityInfo
  is_hidden: boolean
  slot: number
}

export interface Form {
  name: string
  url: string
}

export interface Version {
  name: string
  url: string
}

export interface GameIndex {
  game_index: number
  version: Version
}

export interface MoveInfo {
  name: string
  url: string
}

export interface MoveLearnMethod {
  name: string
  url: string
}

export interface VersionGroup {
  name: string
  url: string
}

export interface VersionGroupDetail {
  level_learned_at: number
  move_learn_method: MoveLearnMethod
  version_group: VersionGroup
}

export interface Move {
  move: MoveInfo
  version_group_details: VersionGroupDetail[]
}

export interface Species {
  name: string
  url: string
}

export interface Sprites {
  back_default: string
  back_female?: any
  back_shiny: string
  back_shiny_female?: any
  front_default: string
  front_female?: any
  front_shiny: string
  front_shiny_female?: any
}

export interface StatInfo {
  name: string
  url: string
}

export interface Stat {
  base_stat: number
  effort: number
  stat: StatInfo
}

export interface TypeInfo {
  name: string
  url: string
}

export interface Type {
  slot: number
  type: TypeInfo
}

export interface Pokemon {
  abilities: Ability[]
  base_experience: number
  forms: Form[]
  game_indices: GameIndex[]
  height: number
  held_items: any[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: Move[]
  name: string
  order: number
  species: Species
  sprites: Sprites
  stats: Stat[]
  types: Type[]
  weight: number
}
