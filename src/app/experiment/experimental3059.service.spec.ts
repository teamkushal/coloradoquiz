import { TestBed } from '@angular/core/testing';

import { Experimental3059Service } from './experimental3059.service';

describe('Experimental3059Service', () => {
  let service: Experimental3059Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3059Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
