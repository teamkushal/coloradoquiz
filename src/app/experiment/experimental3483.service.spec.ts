import { TestBed } from '@angular/core/testing';

import { Experimental3483Service } from './experimental3483.service';

describe('Experimental3483Service', () => {
  let service: Experimental3483Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3483Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
