import { TestBed, inject } from '@angular/core/testing';

import { NgxobjectmanagerService } from './ngxobjectmanager.service';

describe('NgxobjectmanagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxobjectmanagerService]
    });
  });

  it('should be created', inject([NgxobjectmanagerService], (service: NgxobjectmanagerService) => {
    expect(service).toBeTruthy();
  }));
});
