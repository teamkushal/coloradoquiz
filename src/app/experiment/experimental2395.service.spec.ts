import { TestBed } from '@angular/core/testing';

import { Experimental2395Service } from './experimental2395.service';

describe('Experimental2395Service', () => {
  let service: Experimental2395Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2395Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
