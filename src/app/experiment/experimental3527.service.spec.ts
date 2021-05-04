import { TestBed } from '@angular/core/testing';

import { Experimental3527Service } from './experimental3527.service';

describe('Experimental3527Service', () => {
  let service: Experimental3527Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3527Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
