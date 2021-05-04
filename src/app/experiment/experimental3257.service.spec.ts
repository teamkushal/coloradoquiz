import { TestBed } from '@angular/core/testing';

import { Experimental3257Service } from './experimental3257.service';

describe('Experimental3257Service', () => {
  let service: Experimental3257Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3257Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
