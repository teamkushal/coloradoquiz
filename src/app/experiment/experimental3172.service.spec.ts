import { TestBed } from '@angular/core/testing';

import { Experimental3172Service } from './experimental3172.service';

describe('Experimental3172Service', () => {
  let service: Experimental3172Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3172Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
