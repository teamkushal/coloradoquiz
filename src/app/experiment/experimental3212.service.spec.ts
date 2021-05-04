import { TestBed } from '@angular/core/testing';

import { Experimental3212Service } from './experimental3212.service';

describe('Experimental3212Service', () => {
  let service: Experimental3212Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3212Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
