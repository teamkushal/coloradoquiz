import { TestBed } from '@angular/core/testing';

import { Experimental2519Service } from './experimental2519.service';

describe('Experimental2519Service', () => {
  let service: Experimental2519Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2519Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
