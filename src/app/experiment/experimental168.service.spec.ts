import { TestBed } from '@angular/core/testing';

import { Experimental168Service } from './experimental168.service';

describe('Experimental168Service', () => {
  let service: Experimental168Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental168Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
