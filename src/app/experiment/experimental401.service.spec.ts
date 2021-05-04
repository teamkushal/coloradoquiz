import { TestBed } from '@angular/core/testing';

import { Experimental401Service } from './experimental401.service';

describe('Experimental401Service', () => {
  let service: Experimental401Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental401Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
