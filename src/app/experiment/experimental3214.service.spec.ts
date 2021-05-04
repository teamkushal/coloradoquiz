import { TestBed } from '@angular/core/testing';

import { Experimental3214Service } from './experimental3214.service';

describe('Experimental3214Service', () => {
  let service: Experimental3214Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3214Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
