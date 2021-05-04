import { TestBed } from '@angular/core/testing';

import { Experimental3286Service } from './experimental3286.service';

describe('Experimental3286Service', () => {
  let service: Experimental3286Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3286Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
