import { TestBed } from '@angular/core/testing';

import { Experimental3791Service } from './experimental3791.service';

describe('Experimental3791Service', () => {
  let service: Experimental3791Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3791Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
