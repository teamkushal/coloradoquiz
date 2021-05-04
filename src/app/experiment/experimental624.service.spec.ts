import { TestBed } from '@angular/core/testing';

import { Experimental624Service } from './experimental624.service';

describe('Experimental624Service', () => {
  let service: Experimental624Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental624Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
