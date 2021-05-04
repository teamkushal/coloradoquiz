import { TestBed } from '@angular/core/testing';

import { Experimental182Service } from './experimental182.service';

describe('Experimental182Service', () => {
  let service: Experimental182Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental182Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
