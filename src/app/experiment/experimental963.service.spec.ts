import { TestBed } from '@angular/core/testing';

import { Experimental963Service } from './experimental963.service';

describe('Experimental963Service', () => {
  let service: Experimental963Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental963Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
