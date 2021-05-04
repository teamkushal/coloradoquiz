import { TestBed } from '@angular/core/testing';

import { Experimental646Service } from './experimental646.service';

describe('Experimental646Service', () => {
  let service: Experimental646Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental646Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
