import { NgModule, ModuleWithProviders } from '@angular/core';
import { ObjectmanagerService } from './ngxobjectmanager.service';

@NgModule({
  imports: [],
  exports: []
})
export class NgxobjectmanagerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxobjectmanagerModule,
      providers: [ObjectmanagerService]
    };
  }
}
