import { TestBed } from '@angular/core/testing';

import { Experimental2668Service } from './experimental2668.service';

describe('Experimental2668Service', () => {
  let service: Experimental2668Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2668Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
