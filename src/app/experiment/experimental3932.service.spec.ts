import { TestBed } from '@angular/core/testing';

import { Experimental3932Service } from './experimental3932.service';

describe('Experimental3932Service', () => {
  let service: Experimental3932Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3932Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
