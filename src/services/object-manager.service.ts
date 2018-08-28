import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestResult, QueryParameters, toCamel } from '..';
import { map } from 'rxjs/operators';

@Injectable()
export class ObjectManagerService {
  url = window.location.origin + '/Relativity.Rest/api/Relativity.Services.ObjectQuery.IObjectQueryModule/Object%20Query%20Manager/QueryAsync';
  constructor(private http: HttpClient) { }

  queryAsync(q: QueryParameters): Observable<RequestResult> {
    const headers = new HttpHeaders({ 'X-CSRF-Header': '.' });
    return this.http.post<any>(this.url, q, { headers: headers })
    .pipe(map(x => toCamel(x)));
  }
}
