import { TestBed } from '@angular/core/testing';

import { Experimental156Service } from './experimental156.service';

describe('Experimental156Service', () => {
  let service: Experimental156Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental156Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
