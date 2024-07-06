import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageCheckService {

  constructor(private http: HttpClient) { }

  checkImage(url: string): Observable<boolean> {
    return this.http.head(url, { observe: 'response' })
      .pipe(
        map(response => response.status === 200),
        catchError((error) => {
          return [false]
        })
      );
  }
}
