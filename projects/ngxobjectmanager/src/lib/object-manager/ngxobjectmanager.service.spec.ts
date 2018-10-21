import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ObjectmanagerService } from './ngxobjectmanager.service';

describe('NgxobjectmanagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ObjectmanagerService]
    });
  });

  it('should be created', inject([ObjectmanagerService], (service: ObjectmanagerService) => {
    expect(service).toBeTruthy();
  }));
});
