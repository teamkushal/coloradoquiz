import { TestBed } from '@angular/core/testing';

import { Experimental3693Service } from './experimental3693.service';

describe('Experimental3693Service', () => {
  let service: Experimental3693Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3693Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
