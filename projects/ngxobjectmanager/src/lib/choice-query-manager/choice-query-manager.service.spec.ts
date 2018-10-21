import { TestBed, inject } from '@angular/core/testing';

import { ChoiceQueryManagerService } from './choice-query-manager.service';
import { HttpClientModule } from '@angular/common/http';

describe('ChoiceQueryManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ChoiceQueryManagerService]
    });
  });

  it('should be created', inject([ChoiceQueryManagerService], (service: ChoiceQueryManagerService) => {
    expect(service).toBeTruthy();
  }));
});
