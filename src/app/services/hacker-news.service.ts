import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {

  constructor(
    public httpClient: HttpClient
  ) { }

  public url = environment.API_URL 

  
  public getItems(query:string,page:number): Observable<any> {
    let defaultUrl=`search_by_date?query=${query}`
    if(page){
      defaultUrl = `search_by_date?query=${query}&page=${page}`
    }
    return this.httpClient.get(this.url + defaultUrl).pipe( map( res => res as any [] ) );
  }
}
