import { TestBed } from '@angular/core/testing';

import { Experimental3765Service } from './experimental3765.service';

describe('Experimental3765Service', () => {
  let service: Experimental3765Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3765Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
