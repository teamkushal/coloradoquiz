import { TestBed } from '@angular/core/testing';

import { Experimental3776Service } from './experimental3776.service';

describe('Experimental3776Service', () => {
  let service: Experimental3776Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3776Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
