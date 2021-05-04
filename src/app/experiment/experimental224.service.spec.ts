import { TestBed } from '@angular/core/testing';

import { Experimental224Service } from './experimental224.service';

describe('Experimental224Service', () => {
  let service: Experimental224Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental224Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
