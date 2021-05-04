import { TestBed } from '@angular/core/testing';

import { Experimental3653Service } from './experimental3653.service';

describe('Experimental3653Service', () => {
  let service: Experimental3653Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3653Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
