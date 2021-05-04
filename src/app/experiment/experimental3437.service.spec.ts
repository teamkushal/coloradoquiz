import { TestBed } from '@angular/core/testing';

import { Experimental3437Service } from './experimental3437.service';

describe('Experimental3437Service', () => {
  let service: Experimental3437Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3437Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
