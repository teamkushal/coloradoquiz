import { TestBed } from '@angular/core/testing';

import { Experimental3309Service } from './experimental3309.service';

describe('Experimental3309Service', () => {
  let service: Experimental3309Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3309Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
