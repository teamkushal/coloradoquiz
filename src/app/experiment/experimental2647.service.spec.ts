import { TestBed } from '@angular/core/testing';

import { Experimental2647Service } from './experimental2647.service';

describe('Experimental2647Service', () => {
  let service: Experimental2647Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2647Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
