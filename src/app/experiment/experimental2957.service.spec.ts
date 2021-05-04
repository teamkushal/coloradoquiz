import { TestBed } from '@angular/core/testing';

import { Experimental2957Service } from './experimental2957.service';

describe('Experimental2957Service', () => {
  let service: Experimental2957Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2957Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
