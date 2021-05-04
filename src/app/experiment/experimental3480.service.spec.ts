import { TestBed } from '@angular/core/testing';

import { Experimental3480Service } from './experimental3480.service';

describe('Experimental3480Service', () => {
  let service: Experimental3480Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3480Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
