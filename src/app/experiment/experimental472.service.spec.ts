import { TestBed } from '@angular/core/testing';

import { Experimental472Service } from './experimental472.service';

describe('Experimental472Service', () => {
  let service: Experimental472Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental472Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
