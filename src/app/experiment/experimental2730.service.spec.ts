import { TestBed } from '@angular/core/testing';

import { Experimental2730Service } from './experimental2730.service';

describe('Experimental2730Service', () => {
  let service: Experimental2730Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2730Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
