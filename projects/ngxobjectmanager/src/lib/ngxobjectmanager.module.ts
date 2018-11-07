import { NgModule, ModuleWithProviders } from '@angular/core';
@NgModule({
  imports: [],
  exports: []
})
export class NgxobjectmanagerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxobjectmanagerModule,
      providers: []
    };
  }
}
