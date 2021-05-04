import { TestBed } from '@angular/core/testing';

import { Experimental2516Service } from './experimental2516.service';

describe('Experimental2516Service', () => {
  let service: Experimental2516Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2516Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
