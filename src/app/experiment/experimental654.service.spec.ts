import { TestBed } from '@angular/core/testing';

import { Experimental654Service } from './experimental654.service';

describe('Experimental654Service', () => {
  let service: Experimental654Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental654Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
