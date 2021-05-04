import { TestBed } from '@angular/core/testing';

import { Experimental407Service } from './experimental407.service';

describe('Experimental407Service', () => {
  let service: Experimental407Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental407Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
