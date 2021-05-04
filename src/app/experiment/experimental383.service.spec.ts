import { TestBed } from '@angular/core/testing';

import { Experimental383Service } from './experimental383.service';

describe('Experimental383Service', () => {
  let service: Experimental383Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental383Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
