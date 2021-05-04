import { TestBed } from '@angular/core/testing';

import { Experimental2365Service } from './experimental2365.service';

describe('Experimental2365Service', () => {
  let service: Experimental2365Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2365Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
