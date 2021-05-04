import { TestBed } from '@angular/core/testing';

import { Experimental2933Service } from './experimental2933.service';

describe('Experimental2933Service', () => {
  let service: Experimental2933Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2933Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
