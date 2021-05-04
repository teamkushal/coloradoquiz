import { TestBed } from '@angular/core/testing';

import { Experimental625Service } from './experimental625.service';

describe('Experimental625Service', () => {
  let service: Experimental625Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental625Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
