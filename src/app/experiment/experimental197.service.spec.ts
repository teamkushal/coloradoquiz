import { TestBed } from '@angular/core/testing';

import { Experimental197Service } from './experimental197.service';

describe('Experimental197Service', () => {
  let service: Experimental197Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental197Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
