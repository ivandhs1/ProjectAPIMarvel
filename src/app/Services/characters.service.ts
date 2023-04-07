import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  PUBLIC_KEY = '080025342473c2e928a25e1d1f553403';
  HASH = '828e2ce60da7caaa34ef7a76d54e5ef7';
  URL_API = `https://gateway.marvel.com:443/v1/public/characters?limit=32&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  NAME = "";
  

  constructor(private http: HttpClient) { }

  getAllCharacters(vari:number): Observable<any> {
    let url = `https://gateway.marvel.com:443/v1/public/characters?ts=1000&limit=${vari}&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`
    return this.http.get<any>(url)
        .pipe(map
          ((data:any) => data.data.results));
  }

  getByName(name: string):Observable<any>{
    let url: string = `https://gateway.marvel.com/v1/public/characters?ts=1000&nameStartsWith=${name}&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
    return this.http.get<any>(url)
    .pipe(map
      ((data:any) => data.data.results));
  }

}
