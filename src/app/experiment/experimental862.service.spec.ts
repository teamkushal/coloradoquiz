import { TestBed } from '@angular/core/testing';

import { Experimental862Service } from './experimental862.service';

describe('Experimental862Service', () => {
  let service: Experimental862Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental862Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
