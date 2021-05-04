import { TestBed } from '@angular/core/testing';

import { Experimental3388Service } from './experimental3388.service';

describe('Experimental3388Service', () => {
  let service: Experimental3388Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3388Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
