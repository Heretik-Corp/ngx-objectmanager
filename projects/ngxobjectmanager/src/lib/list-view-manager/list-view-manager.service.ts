import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { toCamel } from '../utils';
import { map } from 'rxjs/operators';

export type ItemListType = 'ACLAwareStaticField' | 'Security' | 'DateTimeSystem' | 'Text' | 'Number' | 'Boolean' | 'MultiValueText';

export interface ListView {
  name: string;
  artifactId: number;
}

export interface ActiveView extends ListView {
  fieldsIds: number[];
  renderLinks: boolean;
  hasConditions: boolean;
  groupDefinitionFieldName: string;
  queryHint: string;
}
export interface FieldDef {
  allowHtml: boolean;
  avfId: number;
  columnName: string;
  headerName: string;
  trueValue: string;
  falseValue: string;
  fieldTypeId: number; // TODO
  formatString: string;
  itemListType: ItemListType;
  isLinked: boolean;
  isFilterable: boolean;
  isSortable: boolean;
  isSystem: boolean;
  isReflected: boolean;
  isRelational: boolean;
  friendlyName: string;
  maxLength: number;
  staticText: string;
  width: string;
  wrapping: boolean;
  dataGridEnabled: boolean;
  filterType: string;
  includeInTextIndex: boolean;
  categoryId: number;
  allowGroupBy: boolean;
  allowPivot: boolean;
  artifactId: number;
  viewFieldId: number;
  guids: string[];
}

export interface ViewResults {
  activeView: ActiveView;
  views: ListView[];
  fieldCollection: { [key: string]: FieldDef };
}


export interface ListViewDef {
  listPageSettings: any;
  viewResults: ViewResults;
}


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
