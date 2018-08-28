import { TestBed, inject } from '@angular/core/testing';

import { ObjectManagerService } from './object-manager.service';

describe('ObjectManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObjectManagerService]
    });
  });

  it('should be created', inject([ObjectManagerService], (service: ObjectManagerService) => {
    expect(service).toBeTruthy();
  }));
});
