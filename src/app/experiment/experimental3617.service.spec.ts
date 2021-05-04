import { TestBed } from '@angular/core/testing';

import { Experimental3617Service } from './experimental3617.service';

describe('Experimental3617Service', () => {
  let service: Experimental3617Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3617Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
