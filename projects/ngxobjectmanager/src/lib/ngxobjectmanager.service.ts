import { Injectable } from '@angular/core';
import { QueryParameters, RequestResult, toCamel } from './models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObjectmanagerService {
  url = window.location.origin + '/Relativity.Rest/api/Relativity.Services.ObjectQuery.IObjectQueryModule/Object%20Query%20Manager/QueryAsync'
  constructor(private http: HttpClient) { }

  queryAsync(q: QueryParameters): Observable<RequestResult> {
    const headers = new HttpHeaders({ 'X-CSRF-Header': '.' });
    return this.http.post(this.url, q, { headers: headers })
    .pipe(map(x => toCamel(x)));
  }
}
