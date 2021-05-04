import { TestBed } from '@angular/core/testing';

import { Experimental2617Service } from './experimental2617.service';

describe('Experimental2617Service', () => {
  let service: Experimental2617Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2617Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
