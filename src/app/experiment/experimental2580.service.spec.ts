import { TestBed } from '@angular/core/testing';

import { Experimental2580Service } from './experimental2580.service';

describe('Experimental2580Service', () => {
  let service: Experimental2580Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2580Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
