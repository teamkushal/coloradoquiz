import { TestBed } from '@angular/core/testing';

import { Experimental154Service } from './experimental154.service';

describe('Experimental154Service', () => {
  let service: Experimental154Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental154Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
