import { TestBed } from '@angular/core/testing';

import { Experimental2816Service } from './experimental2816.service';

describe('Experimental2816Service', () => {
  let service: Experimental2816Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2816Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
