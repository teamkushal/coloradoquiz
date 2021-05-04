import { TestBed } from '@angular/core/testing';

import { Experimental2025Service } from './experimental2025.service';

describe('Experimental2025Service', () => {
  let service: Experimental2025Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2025Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
