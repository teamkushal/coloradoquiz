import { TestBed } from '@angular/core/testing';

import { Experimental489Service } from './experimental489.service';

describe('Experimental489Service', () => {
  let service: Experimental489Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental489Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
