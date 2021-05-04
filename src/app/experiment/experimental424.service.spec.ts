import { TestBed } from '@angular/core/testing';

import { Experimental424Service } from './experimental424.service';

describe('Experimental424Service', () => {
  let service: Experimental424Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental424Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
