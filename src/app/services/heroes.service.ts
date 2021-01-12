import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class HeroesService {
  TS = `1`;
  PUBLIC_KEY = `390603e52d88b75740f00914c4e37adb`;
  HASH = `1e941387665084635fb13e9118718ec4`;
  URL_API = `https://gateway.marvel.com:443/v1/public`;
  // ?ts=1&apikey=390603e52d88b75740f00914c4e37adb&hash=1e941387665084635fb13e9118718ec4`;
  // https://gateway.marvel.com:443/v1/public/characters?orderBy=-modified&limit=100&ts=1&apikey=390603e52d88b75740f00914c4e37adb&hash=1e941387665084635fb13e9118718ec4
  heroes_URL = `${this.URL_API}/characters?orderBy=-modified&limit=100&ts=${this.TS}&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor(private http: HttpClient) {}

  getAllHeroes(): Observable<any> {
    return this.http
      .get<any>(this.heroes_URL)
      .pipe(map((data) => data.data.results));
  }

  getAllMagazineType(id, type): Observable<any> {
    const magazine_URL = `${this.URL_API}/characters/${id}/${type}?orderBy=onsaleDate&limit=100&ts=${this.TS}&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
    return this.http
      .get<any>(magazine_URL)
      .pipe(map((data) => data.data.results));
  }
}
