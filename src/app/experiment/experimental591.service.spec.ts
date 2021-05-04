import { TestBed } from '@angular/core/testing';

import { Experimental591Service } from './experimental591.service';

describe('Experimental591Service', () => {
  let service: Experimental591Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental591Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
