import { TestBed } from '@angular/core/testing';

import { Experimental2858Service } from './experimental2858.service';

describe('Experimental2858Service', () => {
  let service: Experimental2858Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2858Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
