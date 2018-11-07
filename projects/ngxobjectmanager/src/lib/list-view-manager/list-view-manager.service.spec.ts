import { TestBed, inject } from '@angular/core/testing';

import { ListViewManagerService } from './list-view-manager.service';
import { HttpClientModule } from '@angular/common/http';

describe('ListViewManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ListViewManagerService]
    });
  });

  it('should be created', inject([ListViewManagerService], (service: ListViewManagerService) => {
    expect(service).toBeTruthy();
  }));
});
