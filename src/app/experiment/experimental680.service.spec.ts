import { TestBed } from '@angular/core/testing';

import { Experimental680Service } from './experimental680.service';

describe('Experimental680Service', () => {
  let service: Experimental680Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental680Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
