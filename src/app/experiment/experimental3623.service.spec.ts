import { TestBed } from '@angular/core/testing';

import { Experimental3623Service } from './experimental3623.service';

describe('Experimental3623Service', () => {
  let service: Experimental3623Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3623Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
