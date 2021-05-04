import { TestBed } from '@angular/core/testing';

import { Experimental698Service } from './experimental698.service';

describe('Experimental698Service', () => {
  let service: Experimental698Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental698Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
