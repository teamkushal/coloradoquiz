import { TestBed } from '@angular/core/testing';

import { Experimental3110Service } from './experimental3110.service';

describe('Experimental3110Service', () => {
  let service: Experimental3110Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3110Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
