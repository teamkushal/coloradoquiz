import { TestBed } from '@angular/core/testing';

import { Experimental3982Service } from './experimental3982.service';

describe('Experimental3982Service', () => {
  let service: Experimental3982Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3982Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
