import { TestBed } from '@angular/core/testing';

import { Experimental2689Service } from './experimental2689.service';

describe('Experimental2689Service', () => {
  let service: Experimental2689Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2689Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
