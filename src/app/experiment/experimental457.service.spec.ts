import { TestBed } from '@angular/core/testing';

import { Experimental457Service } from './experimental457.service';

describe('Experimental457Service', () => {
  let service: Experimental457Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental457Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
