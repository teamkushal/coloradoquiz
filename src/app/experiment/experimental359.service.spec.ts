import { TestBed } from '@angular/core/testing';

import { Experimental359Service } from './experimental359.service';

describe('Experimental359Service', () => {
  let service: Experimental359Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental359Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
