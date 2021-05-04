import { TestBed } from '@angular/core/testing';

import { Experimental2626Service } from './experimental2626.service';

describe('Experimental2626Service', () => {
  let service: Experimental2626Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2626Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
