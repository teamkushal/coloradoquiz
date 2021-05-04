import { TestBed } from '@angular/core/testing';

import { Experimental373Service } from './experimental373.service';

describe('Experimental373Service', () => {
  let service: Experimental373Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental373Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
