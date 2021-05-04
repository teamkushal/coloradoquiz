import { TestBed } from '@angular/core/testing';

import { Experimental2885Service } from './experimental2885.service';

describe('Experimental2885Service', () => {
  let service: Experimental2885Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2885Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
