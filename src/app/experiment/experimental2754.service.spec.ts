import { TestBed } from '@angular/core/testing';

import { Experimental2754Service } from './experimental2754.service';

describe('Experimental2754Service', () => {
  let service: Experimental2754Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2754Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
