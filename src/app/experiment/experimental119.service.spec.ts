import { TestBed } from '@angular/core/testing';

import { Experimental119Service } from './experimental119.service';

describe('Experimental119Service', () => {
  let service: Experimental119Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental119Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
