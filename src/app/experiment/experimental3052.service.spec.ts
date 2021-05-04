import { TestBed } from '@angular/core/testing';

import { Experimental3052Service } from './experimental3052.service';

describe('Experimental3052Service', () => {
  let service: Experimental3052Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3052Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
