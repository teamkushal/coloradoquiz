import { TestBed } from '@angular/core/testing';

import { Experimental661Service } from './experimental661.service';

describe('Experimental661Service', () => {
  let service: Experimental661Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental661Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
