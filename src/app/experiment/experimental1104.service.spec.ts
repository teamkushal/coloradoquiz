import { TestBed } from '@angular/core/testing';

import { Experimental1104Service } from './experimental1104.service';

describe('Experimental1104Service', () => {
  let service: Experimental1104Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1104Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
