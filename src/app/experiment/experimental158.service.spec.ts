import { TestBed } from '@angular/core/testing';

import { Experimental158Service } from './experimental158.service';

describe('Experimental158Service', () => {
  let service: Experimental158Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental158Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
