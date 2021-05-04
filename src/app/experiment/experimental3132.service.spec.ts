import { TestBed } from '@angular/core/testing';

import { Experimental3132Service } from './experimental3132.service';

describe('Experimental3132Service', () => {
  let service: Experimental3132Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3132Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
