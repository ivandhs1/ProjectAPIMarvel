import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  PUBLIC_KEY = '080025342473c2e928a25e1d1f553403';
  HASH = '828e2ce60da7caaa34ef7a76d54e5ef7';

  constructor(private http: HttpClient) { }

  getAllComics(vari:number): Observable<any> {
    let url = `https://gateway.marvel.com:443/v1/public/comics?ts=1000&limit=${vari}&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`
    return this.http.get<any>(url)
        .pipe(map
          ((data:any) => data.data.results));
  }

  getByTitleComic(title: string):Observable<any>{
    let url: string = `https://gateway.marvel.com/v1/public/comics?ts=1000&titleStartsWith=${title}&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
    return this.http.get<any>(url)
    .pipe(map
      ((data:any) => data.data.results));
  }
}
