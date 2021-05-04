import { TestBed } from '@angular/core/testing';

import { Experimental3504Service } from './experimental3504.service';

describe('Experimental3504Service', () => {
  let service: Experimental3504Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3504Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
