import { TestBed } from '@angular/core/testing';

import { Experimental2506Service } from './experimental2506.service';

describe('Experimental2506Service', () => {
  let service: Experimental2506Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2506Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
