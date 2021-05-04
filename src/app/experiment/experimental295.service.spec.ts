import { TestBed } from '@angular/core/testing';

import { Experimental295Service } from './experimental295.service';

describe('Experimental295Service', () => {
  let service: Experimental295Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental295Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
