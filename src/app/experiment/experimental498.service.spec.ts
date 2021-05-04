import { TestBed } from '@angular/core/testing';

import { Experimental498Service } from './experimental498.service';

describe('Experimental498Service', () => {
  let service: Experimental498Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental498Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
