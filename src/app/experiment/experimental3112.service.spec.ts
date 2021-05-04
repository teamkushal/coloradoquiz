import { TestBed } from '@angular/core/testing';

import { Experimental3112Service } from './experimental3112.service';

describe('Experimental3112Service', () => {
  let service: Experimental3112Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3112Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
