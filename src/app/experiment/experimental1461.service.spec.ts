import { TestBed } from '@angular/core/testing';

import { Experimental1461Service } from './experimental1461.service';

describe('Experimental1461Service', () => {
  let service: Experimental1461Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1461Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
