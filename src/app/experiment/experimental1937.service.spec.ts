import { TestBed } from '@angular/core/testing';

import { Experimental1937Service } from './experimental1937.service';

describe('Experimental1937Service', () => {
  let service: Experimental1937Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1937Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
