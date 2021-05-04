import { TestBed } from '@angular/core/testing';

import { Experimental3970Service } from './experimental3970.service';

describe('Experimental3970Service', () => {
  let service: Experimental3970Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3970Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
