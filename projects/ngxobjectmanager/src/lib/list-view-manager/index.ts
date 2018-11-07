export * from './list-view-manager.service';

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
    fieldTypeId: number; //TODO
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
