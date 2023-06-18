import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, Observable, delay } from 'rxjs';
import { Store } from '@ngxs/store';
import { AddCats } from 'src/app/store/catArray.action';
import { ICat } from 'src/app/models/cat';
import { IBreed } from 'src/app/models/breed';

@Injectable({
  providedIn: 'root',
})
export class CatsApiService {
  apiBreedsUrl: string = 'https://api.thecatapi.com/v1/breeds/';
  apiImage: string = 'https://api.thecatapi.com/v1/images/';
  apiKey: string =
    'live_NL2w6d2GxpQzAl7rBUueTO2j8XTWXUJUlnf9PGXPdyrBE7CdAM6fTLGSXBvY0Vgt';

  constructor(private http: HttpClient, private store: Store) {}
  getAllBreeds(): Observable<IBreed[]> {
    return this.http.get<IBreed[]>(this.apiBreedsUrl);
  }

  getByBreed(numb: number, breed: string): Observable<ICat[]> {
    return this.http
      .get<ICat[]>(
        this.apiImage +
          'search?limit=' +
          numb +
          '&breed_ids=' +
          breed +
          '&api_key=' +
          this.apiKey,
      )
      .pipe(
        tap((cats: ICat[]) => {
          this.store.dispatch(new AddCats([]));
        }),
        delay(200),
        tap((cats: ICat[]) => {
          this.store.dispatch(new AddCats(cats));
        }),
      );
  }

  getPictures(numb: number): Observable<ICat[]> {
    return this.http
      .get<ICat[]>(
        this.apiImage + 'search?limit=' + numb + '&api_key=' + this.apiKey,
      )
      .pipe(
        tap((cats: ICat[]) => {
          this.store.dispatch(new AddCats([]));
        }),
        delay(200),
        tap((cats: ICat[]) => this.store.dispatch(new AddCats(cats))),
      );
  }

  getInfoById(id: string) {
    return this.http.get(this.apiImage + id);
  }
}
