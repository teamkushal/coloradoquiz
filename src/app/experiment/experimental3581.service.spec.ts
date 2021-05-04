import { TestBed } from '@angular/core/testing';

import { Experimental3581Service } from './experimental3581.service';

describe('Experimental3581Service', () => {
  let service: Experimental3581Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3581Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
