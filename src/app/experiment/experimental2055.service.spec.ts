import { TestBed } from '@angular/core/testing';

import { Experimental2055Service } from './experimental2055.service';

describe('Experimental2055Service', () => {
  let service: Experimental2055Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2055Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
