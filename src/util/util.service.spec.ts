import { TestBed, inject } from '@angular/core/testing';

import { toCamel } from './util.service';

describe('toCamel', () => {
  it('lowers d in artifactID', () => {
    const r = toCamel('artifactID');
    expect(r).toBe('artifactId');
  });
});