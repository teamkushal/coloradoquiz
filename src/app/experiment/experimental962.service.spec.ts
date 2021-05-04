import { TestBed } from '@angular/core/testing';

import { Experimental962Service } from './experimental962.service';

describe('Experimental962Service', () => {
  let service: Experimental962Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental962Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
