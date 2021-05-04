import { TestBed } from '@angular/core/testing';

import { Experimental674Service } from './experimental674.service';

describe('Experimental674Service', () => {
  let service: Experimental674Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental674Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
