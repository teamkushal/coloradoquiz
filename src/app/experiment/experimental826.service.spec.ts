import { TestBed } from '@angular/core/testing';

import { Experimental826Service } from './experimental826.service';

describe('Experimental826Service', () => {
  let service: Experimental826Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental826Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
