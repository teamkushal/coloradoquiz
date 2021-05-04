import { TestBed } from '@angular/core/testing';

import { Experimental780Service } from './experimental780.service';

describe('Experimental780Service', () => {
  let service: Experimental780Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental780Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
