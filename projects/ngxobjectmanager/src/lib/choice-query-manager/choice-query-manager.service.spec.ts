import { TestBed, inject } from '@angular/core/testing';

import { ChoiceQueryManagerService } from './choice-query-manager.service';

describe('ChoiceQueryManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChoiceQueryManagerService]
    });
  });

  it('should be created', inject([ChoiceQueryManagerService], (service: ChoiceQueryManagerService) => {
    expect(service).toBeTruthy();
  }));
});
