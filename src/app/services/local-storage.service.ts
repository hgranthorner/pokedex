import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import {
  JavascriptTypes,
  LocalStorageData,
  LocalStorageKeysEnum,
} from '../models'

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly storage = new BehaviorSubject<{ [key: string]: unknown }>({})
  private readonly keys = new Set<string>()
  storage$ = this.storage.asObservable()

  constructor() {
    this.storage.next(LocalStorageService.loadStorage())
  }

  setStorage(key: LocalStorageKeysEnum, value: unknown) {
    this.keys.add(key)
    localStorage.setItem(key, JSON.stringify({ value, type: typeof value }))
    this.storage.next({ ...this.storage.value, [key]: value })
  }

  private static loadStorage() {
    const x = {}
    for (const key in localStorage) {
      if (!localStorage.hasOwnProperty(key)) continue
      try {
        const data = JSON.parse(localStorage.getItem(key)) as LocalStorageData
        console.log('Does it equal object? ', data.type, JavascriptTypes.Object)
        if (
          data.type === JavascriptTypes.Object &&
          typeof data.value === JavascriptTypes.Object
        ) {
          x[key] = data.value
        }
        switch (data.type) {
          case JavascriptTypes.Boolean:
            x[key] = data.value === 'true'
            break
          case JavascriptTypes.Number:
            x[key] = Number(data.value)
            break
          case JavascriptTypes.String:
            x[key] = data.value
            break
          case JavascriptTypes.Object:
            console.log('the type be object')
            break
          case JavascriptTypes.Bigint:
          case JavascriptTypes.Undefined:
          case JavascriptTypes.Symbol:
            console.log('We do not support this type yet.')
            break
        }
      } catch (e) {
        console.warn(`Failed to read local storage key ${key}.`)
      }
    }
    console.log(x)
    return x
  }
}
