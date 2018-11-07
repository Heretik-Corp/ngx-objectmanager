import { NgModule, ModuleWithProviders } from '@angular/core';
import { ObjectmanagerService } from './object-manager/ngxobjectmanager.service';
import { ChoiceQueryManagerService } from './choice-query-manager';
import { ListViewManagerService } from './list-view-manager';

@NgModule({
  imports: [],
  exports: []
})
export class NgxobjectmanagerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxobjectmanagerModule,
      providers: [ObjectmanagerService, ChoiceQueryManagerService, ListViewManagerService]
    };
  }
}
