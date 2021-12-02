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
    return this.httpClient.get(this.url + `search_by_date?query=${query}`).pipe( map( res => res as any [] ) );
  }
}
