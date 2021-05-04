import { TestBed } from '@angular/core/testing';

import { Experimental2241Service } from './experimental2241.service';

describe('Experimental2241Service', () => {
  let service: Experimental2241Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2241Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
