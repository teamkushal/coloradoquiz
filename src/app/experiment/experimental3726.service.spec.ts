import { TestBed } from '@angular/core/testing';

import { Experimental3726Service } from './experimental3726.service';

describe('Experimental3726Service', () => {
  let service: Experimental3726Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3726Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
