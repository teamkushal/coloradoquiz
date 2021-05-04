import { TestBed } from '@angular/core/testing';

import { Experimental2076Service } from './experimental2076.service';

describe('Experimental2076Service', () => {
  let service: Experimental2076Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2076Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
