import { TestBed } from '@angular/core/testing';

import { Experimental3474Service } from './experimental3474.service';

describe('Experimental3474Service', () => {
  let service: Experimental3474Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3474Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
