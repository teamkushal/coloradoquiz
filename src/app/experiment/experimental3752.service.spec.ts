import { TestBed } from '@angular/core/testing';

import { Experimental3752Service } from './experimental3752.service';

describe('Experimental3752Service', () => {
  let service: Experimental3752Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3752Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
