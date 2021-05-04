import { TestBed } from '@angular/core/testing';

import { Experimental38Service } from './experimental38.service';

describe('Experimental38Service', () => {
  let service: Experimental38Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental38Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
