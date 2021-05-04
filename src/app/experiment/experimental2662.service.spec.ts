import { TestBed } from '@angular/core/testing';

import { Experimental2662Service } from './experimental2662.service';

describe('Experimental2662Service', () => {
  let service: Experimental2662Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2662Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
