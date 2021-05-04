import { TestBed } from '@angular/core/testing';

import { Experimental3276Service } from './experimental3276.service';

describe('Experimental3276Service', () => {
  let service: Experimental3276Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3276Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
