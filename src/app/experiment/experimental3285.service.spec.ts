import { TestBed } from '@angular/core/testing';

import { Experimental3285Service } from './experimental3285.service';

describe('Experimental3285Service', () => {
  let service: Experimental3285Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3285Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
