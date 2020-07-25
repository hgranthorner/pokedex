import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly path = 'https://pokeapi.co/api/v2/'
  constructor(private readonly http: HttpClient) {}

  get<T>(path: string, params?: {}) {
    return this.http
      .get<T>(this.path + path, params)
      .pipe(catchError(err => throwError(err)))
  }
}
