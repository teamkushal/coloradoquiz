import { TestBed } from '@angular/core/testing';

import { Experimental3348Service } from './experimental3348.service';

describe('Experimental3348Service', () => {
  let service: Experimental3348Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3348Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
