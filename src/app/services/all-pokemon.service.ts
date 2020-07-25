import { Injectable } from '@angular/core'
import { ApiService } from './api.service'
import { BehaviorSubject, of } from 'rxjs'
import {
  AllPokemonDto,
  LocalStorageKeys,
  LocalStorageKeysEnum,
  Pokemon,
} from '../models'
import { map, pluck, switchMap, tap, withLatestFrom } from 'rxjs/operators'
import { LocalStorageService } from './local-storage.service'

@Injectable({
  providedIn: 'root',
})
export class AllPokemonService {
  private readonly pokemon = new BehaviorSubject<Pokemon[]>([])
  pokemon$ = this.pokemon.asObservable()

  constructor(
    private readonly api: ApiService,
    private readonly localStorage: LocalStorageService
  ) {}

  getPokemon(): void {
    of(null)
      .pipe(
        withLatestFrom(this.localStorage.storage$),
        map(([, x]) => x[LocalStorageKeys.Pokemon]),
        switchMap((ps: Pokemon[] | undefined) => {
          if (ps) {
            return of(ps)
          } else {
            return this.api
              .get<AllPokemonDto[]>(`pokemon/?offset=${0}&limit=${2000}`)
              .pipe(
                pluck('results'),
                map((ps: Pokemon[]) => this.mapIds(ps)),
                tap(ps =>
                  this.localStorage.setStorage(LocalStorageKeysEnum.Pokemon, ps)
                )
              )
          }
        })
      )
      .subscribe(x => this.pokemon.next(x))
  }

  private mapIds(ps: Pokemon[]) {
    return ps.map(p => {
      const { url } = p
      const lastSlash = url.lastIndexOf('/')
      const secondToLastSlash = url.substring(0, lastSlash).lastIndexOf('/')
      p.id = Number(url.substring(secondToLastSlash + 1, lastSlash))
      return p
    })
  }
}
