import { TestBed } from '@angular/core/testing';

import { Experimental3153Service } from './experimental3153.service';

describe('Experimental3153Service', () => {
  let service: Experimental3153Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3153Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
