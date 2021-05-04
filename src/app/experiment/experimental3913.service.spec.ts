import { TestBed } from '@angular/core/testing';

import { Experimental3913Service } from './experimental3913.service';

describe('Experimental3913Service', () => {
  let service: Experimental3913Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3913Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
