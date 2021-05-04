import { TestBed } from '@angular/core/testing';

import { Experimental3367Service } from './experimental3367.service';

describe('Experimental3367Service', () => {
  let service: Experimental3367Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3367Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
