import { Injectable } from '@angular/core';
import { toCamel } from '../utils';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';


export interface Data {
  workspaceId: number;
  artifactTypeId: number;
  artifactTypeGuids: string[];
  resultCount: number;
  totalResultCount: number;
  currentStartIndex: number;
  previousPage: string;
  nextPage: string;
  dataResults: DataResult[];
}

export interface Permission {
  id: number;
  name: string;
}

export interface File {
  fileId: number;
  fileFieldArtifactId: number;
  fileName: string;
}

export interface Choice {
  artifactId: number;
  artifactTypeGuids: string[];
  name: string[];
}

export interface User {
  artifactId: number;
  name: string[];
}

export type FieldValueType = string | number | File | Choice | User | Choice[];

export interface DataResult {
  permissions: Permission;
  artifactId: number;
  artifactTypeGuids: string[];
  artifactTypeId: number;
  parentArtifactId: number;
  workspaceId: number;
  fields: Field[];
}
export enum FieldType {
  FixedLengthText = 'FixedLengthText',
  LongText = 'LongText',
  YesNo = 'YesNo',
  Currency = 'Currency',
  WholeNumber = 'WholeNumber',
  Decimal = 'Decimal',
  Date = 'Date',
  File = 'File',
  SingleChoice = 'SingleChoice',
  SingleObject = 'SingleObject',
  User = 'User',
  MultipleChoice = 'MultipleChoice',
  MultipleObject = 'MultipleObject'
}

export interface Field {
  name: string;
  value: FieldValueType;
  artifactId: number;
  artifactGuids: string[];
  fieldType: FieldType;
}

export interface RequestResult {
  success: boolean;
  data: Data;
}

export interface QueryParameters {
  query: Query;
  workspaceId: number;
  artifactTypeId: number;
  start: number;
  length: number;
  includePermissions: number[];
  queryToken: string;
}
export interface Query {
  fields: string[];
  condition: string;
  sorts: string[];
}



@Injectable({
  providedIn: 'root'
})
export class ObjectmanagerService {
  url = window.location.origin +
    '/Relativity.Rest/api/Relativity.Services.ObjectQuery.IObjectQueryModule/Object%20Query%20Manager/QueryAsync';
  constructor(private http: HttpClient) { }

  queryAsync(q: QueryParameters): Observable<RequestResult> {
    const headers = new HttpHeaders({ 'X-CSRF-Header': '.' });
    return this.http.post(this.url, q, { headers: headers })
      .pipe(map(x => toCamel(x)));
  }
}
