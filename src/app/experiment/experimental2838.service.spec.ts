import { TestBed } from '@angular/core/testing';

import { Experimental2838Service } from './experimental2838.service';

describe('Experimental2838Service', () => {
  let service: Experimental2838Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2838Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
