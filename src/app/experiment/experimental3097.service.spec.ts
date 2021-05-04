import { TestBed } from '@angular/core/testing';

import { Experimental3097Service } from './experimental3097.service';

describe('Experimental3097Service', () => {
  let service: Experimental3097Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3097Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
