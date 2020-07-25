import { Component, OnInit } from '@angular/core'
import { AllPokemonService } from '../../services/all-pokemon.service'

@Component({
  selector: 'app-pokemon-list',
  template: `
    <ng-container *ngIf="pokemon$ | async as pokemon; else loading">
      <a
        *ngFor="let p of pokemon"
        href="javascript://"
        [routerLink]="['pokemon', p.id]"
        class="nav-link"
        >{{ p.name }}
      </a>
    </ng-container>
    <ng-template #loading>
      <span class="spinner"></span>
    </ng-template>
  `,
  styles: [],
})
export class PokemonListComponent implements OnInit {
  pokemon$ = this.service.pokemon$
  constructor(private readonly service: AllPokemonService) {}

  ngOnInit(): void {
    this.service.getPokemon()
  }
}
