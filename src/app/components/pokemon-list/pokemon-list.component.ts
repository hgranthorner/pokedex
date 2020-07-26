import { Component, OnInit } from '@angular/core'
import { AllPokemonService } from '../../services/all-pokemon.service'

@Component({
  selector: 'app-pokemon-list',
  template: `
    <ul class="nav-list" *ngIf="pokemon$ | async as pokemon; else loading">
      <li *ngFor="let p of pokemon">
        <a
          href="javascript://"
          [routerLink]="['pokemon', p.id]"
          routerLinkActive="active"
          class="nav-link"
          >{{ p.name }}
        </a>
      </li>
    </ul>
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
