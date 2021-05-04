import { TestBed } from '@angular/core/testing';

import { Experimental716Service } from './experimental716.service';

describe('Experimental716Service', () => {
  let service: Experimental716Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental716Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
