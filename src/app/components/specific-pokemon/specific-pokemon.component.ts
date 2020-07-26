import { Component, OnInit } from '@angular/core'
import { SpecificPokemonService } from './specific-pokemon.service'

@Component({
  selector: 'app-specific-pokemon',
  template: `
    <ng-container *ngIf="pokemon$ | async as p">
      {{ p.name }}
      <img
        src="{{ p.sprites.front_default }}"
        alt="A sprite of the pokemon {{ p.name }}."
      />
    </ng-container>
  `,
  styles: [],
  providers: [SpecificPokemonService],
})
export class SpecificPokemonComponent implements OnInit {
  pokemon$ = this.service.specificPokemon$
  constructor(private readonly service: SpecificPokemonService) {}

  ngOnInit(): void {}
}
