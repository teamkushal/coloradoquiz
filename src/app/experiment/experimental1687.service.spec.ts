import { TestBed } from '@angular/core/testing';

import { Experimental1687Service } from './experimental1687.service';

describe('Experimental1687Service', () => {
  let service: Experimental1687Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1687Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
