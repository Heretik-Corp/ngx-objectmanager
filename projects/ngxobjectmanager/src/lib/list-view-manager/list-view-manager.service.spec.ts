import { TestBed, inject } from '@angular/core/testing';

import { ListViewManagerService } from './list-view-manager.service';

describe('ListViewManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListViewManagerService]
    });
  });

  it('should be created', inject([ListViewManagerService], (service: ListViewManagerService) => {
    expect(service).toBeTruthy();
  }));
});
