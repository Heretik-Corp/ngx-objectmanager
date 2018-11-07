import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { toCamel } from '../utils';
import { map } from 'rxjs/operators';
import { ListViewDef } from '.';

@Injectable({
  providedIn: 'root'
})
export class ListViewManagerService {
  url = window.location.origin +
    // tslint:disable-next-line:max-line-length
    '/Relativity.Rest/api/Relativity.Services.ItemListView.IItemListViewModule/Item%20List%20View%20Manager/GetListPageStartupInformationAsync';
  constructor(private http: HttpClient) { }

  getListPageStartupInformationAsync(workspaceId: number, artifactTypeId: number, viewId: number, locale?: string | null)
    : Observable<ListViewDef> {
    const headers = new HttpHeaders({ 'X-CSRF-Header': '.' });
    return this.http.post(this.url, {
      workspaceId: workspaceId,
      activeArtifactTypeID: artifactTypeId,
      activeViewArtifactId: viewId,
      activeDashboardArtifactId: 0
    }, { headers: headers })
      .pipe(map(x => toCamel(x)));
  }
}
