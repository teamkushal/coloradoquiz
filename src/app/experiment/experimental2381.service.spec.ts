import { TestBed } from '@angular/core/testing';

import { Experimental2381Service } from './experimental2381.service';

describe('Experimental2381Service', () => {
  let service: Experimental2381Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2381Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
