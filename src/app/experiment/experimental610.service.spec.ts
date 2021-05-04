import { TestBed } from '@angular/core/testing';

import { Experimental610Service } from './experimental610.service';

describe('Experimental610Service', () => {
  let service: Experimental610Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental610Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
