import { TestBed } from '@angular/core/testing';

import { Experimental2367Service } from './experimental2367.service';

describe('Experimental2367Service', () => {
  let service: Experimental2367Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2367Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
