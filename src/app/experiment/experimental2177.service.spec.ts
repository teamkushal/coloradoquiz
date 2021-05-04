import { TestBed } from '@angular/core/testing';

import { Experimental2177Service } from './experimental2177.service';

describe('Experimental2177Service', () => {
  let service: Experimental2177Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2177Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
