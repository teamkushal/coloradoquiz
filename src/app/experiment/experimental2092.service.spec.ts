import { TestBed } from '@angular/core/testing';

import { Experimental2092Service } from './experimental2092.service';

describe('Experimental2092Service', () => {
  let service: Experimental2092Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2092Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
