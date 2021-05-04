import { TestBed } from '@angular/core/testing';

import { Experimental2031Service } from './experimental2031.service';

describe('Experimental2031Service', () => {
  let service: Experimental2031Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2031Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
