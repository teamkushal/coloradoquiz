import { TestBed } from '@angular/core/testing';

import { Experimental304Service } from './experimental304.service';

describe('Experimental304Service', () => {
  let service: Experimental304Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental304Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
