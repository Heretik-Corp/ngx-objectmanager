import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { toCamel } from '../utils';
import { ChoiceQuery } from './choice-query';
import { ChoiceRef } from './choice-ref';

@Injectable({
  providedIn: 'root'
})
export class ChoiceQueryManagerService {
  url = '/Relativity.Rest/api/Relativity.Services.ChoiceQuery.IChoiceQueryModule/Choice%20Query%20Manager/QueryAsync';

  constructor(private http: HttpClient) { }

  queryAsync(query: ChoiceQuery): Observable<ChoiceRef[]> {
    return this.http.post<ChoiceRef[]>(this.url, query)
    .pipe(map((c) => toCamel(c)));
  }
}
