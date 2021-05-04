import { TestBed } from '@angular/core/testing';

import { Experimental2210Service } from './experimental2210.service';

describe('Experimental2210Service', () => {
  let service: Experimental2210Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2210Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
