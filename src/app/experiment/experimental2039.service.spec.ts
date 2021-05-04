import { TestBed } from '@angular/core/testing';

import { Experimental2039Service } from './experimental2039.service';

describe('Experimental2039Service', () => {
  let service: Experimental2039Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2039Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
