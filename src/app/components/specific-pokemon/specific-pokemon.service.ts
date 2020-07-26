import { Injectable } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { filter, map, switchMap } from 'rxjs/operators'
import { ApiService } from '../../services/api.service'
import { Pokemon } from '../../models'

@Injectable({
  providedIn: 'root',
})
export class SpecificPokemonService {
  private readonly path = 'pokemon/'
  specificPokemon$ = this.route.paramMap.pipe(
    map(map => Number(map.get('id'))),
    filter(id => id !== 0),
    switchMap(id => this.api.get<Pokemon>(this.path + id.toString()))
  )

  constructor(
    private readonly route: ActivatedRoute,
    private readonly api: ApiService
  ) {}
}
