import { TestBed } from '@angular/core/testing';

import { Experimental2648Service } from './experimental2648.service';

describe('Experimental2648Service', () => {
  let service: Experimental2648Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2648Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
