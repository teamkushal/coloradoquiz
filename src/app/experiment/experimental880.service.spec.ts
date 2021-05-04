import { TestBed } from '@angular/core/testing';

import { Experimental880Service } from './experimental880.service';

describe('Experimental880Service', () => {
  let service: Experimental880Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental880Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
