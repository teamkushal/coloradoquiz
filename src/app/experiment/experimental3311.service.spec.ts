import { TestBed } from '@angular/core/testing';

import { Experimental3311Service } from './experimental3311.service';

describe('Experimental3311Service', () => {
  let service: Experimental3311Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3311Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
