import { TestBed } from '@angular/core/testing';

import { Experimental2521Service } from './experimental2521.service';

describe('Experimental2521Service', () => {
  let service: Experimental2521Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2521Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
