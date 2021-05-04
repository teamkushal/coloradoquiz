import { TestBed } from '@angular/core/testing';

import { Experimental3753Service } from './experimental3753.service';

describe('Experimental3753Service', () => {
  let service: Experimental3753Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3753Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
