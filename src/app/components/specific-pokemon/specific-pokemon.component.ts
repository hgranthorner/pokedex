import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { pluck } from 'rxjs/operators'

@Component({
  selector: 'app-specific-pokemon',
  template: `
    <p>
      specific-pokemon works!
      <br />
      id: {{ pokemonId$ | async }}
    </p>
  `,
  styles: [],
})
export class SpecificPokemonComponent implements OnInit {
  pokemonId$ = this.route.params.pipe(pluck('id'))
  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {}
}
