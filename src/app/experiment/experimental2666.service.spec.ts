import { TestBed } from '@angular/core/testing';

import { Experimental2666Service } from './experimental2666.service';

describe('Experimental2666Service', () => {
  let service: Experimental2666Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2666Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
