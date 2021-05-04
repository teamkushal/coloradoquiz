import { TestBed } from '@angular/core/testing';

import { Experimental3118Service } from './experimental3118.service';

describe('Experimental3118Service', () => {
  let service: Experimental3118Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3118Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
