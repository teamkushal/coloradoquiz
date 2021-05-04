import { TestBed } from '@angular/core/testing';

import { Experimental2056Service } from './experimental2056.service';

describe('Experimental2056Service', () => {
  let service: Experimental2056Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2056Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
