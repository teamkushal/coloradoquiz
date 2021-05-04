import { TestBed } from '@angular/core/testing';

import { Experimental2597Service } from './experimental2597.service';

describe('Experimental2597Service', () => {
  let service: Experimental2597Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2597Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
