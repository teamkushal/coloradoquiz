import { TestBed } from '@angular/core/testing';

import { Experimental2594Service } from './experimental2594.service';

describe('Experimental2594Service', () => {
  let service: Experimental2594Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2594Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
