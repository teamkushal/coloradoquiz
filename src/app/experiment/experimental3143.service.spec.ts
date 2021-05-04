import { TestBed } from '@angular/core/testing';

import { Experimental3143Service } from './experimental3143.service';

describe('Experimental3143Service', () => {
  let service: Experimental3143Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3143Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
