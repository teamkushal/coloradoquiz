import { TestBed } from '@angular/core/testing';

import { Experimental956Service } from './experimental956.service';

describe('Experimental956Service', () => {
  let service: Experimental956Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental956Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
