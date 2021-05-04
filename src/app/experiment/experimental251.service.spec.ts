import { TestBed } from '@angular/core/testing';

import { Experimental251Service } from './experimental251.service';

describe('Experimental251Service', () => {
  let service: Experimental251Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental251Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
