import { TestBed } from '@angular/core/testing';

import { Experimental67Service } from './experimental67.service';

describe('Experimental67Service', () => {
  let service: Experimental67Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental67Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
