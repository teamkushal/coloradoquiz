import { TestBed } from '@angular/core/testing';

import { Experimental3892Service } from './experimental3892.service';

describe('Experimental3892Service', () => {
  let service: Experimental3892Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3892Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
