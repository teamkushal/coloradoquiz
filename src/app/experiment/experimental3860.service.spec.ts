import { TestBed } from '@angular/core/testing';

import { Experimental3860Service } from './experimental3860.service';

describe('Experimental3860Service', () => {
  let service: Experimental3860Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3860Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
