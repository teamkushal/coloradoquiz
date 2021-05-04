import { TestBed } from '@angular/core/testing';

import { Experimental837Service } from './experimental837.service';

describe('Experimental837Service', () => {
  let service: Experimental837Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental837Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
