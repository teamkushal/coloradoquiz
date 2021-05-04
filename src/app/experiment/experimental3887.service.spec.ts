import { TestBed } from '@angular/core/testing';

import { Experimental3887Service } from './experimental3887.service';

describe('Experimental3887Service', () => {
  let service: Experimental3887Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3887Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
