import { TestBed } from '@angular/core/testing';

import { Experimental2740Service } from './experimental2740.service';

describe('Experimental2740Service', () => {
  let service: Experimental2740Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2740Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
