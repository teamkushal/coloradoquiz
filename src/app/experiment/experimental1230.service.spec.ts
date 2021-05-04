import { TestBed } from '@angular/core/testing';

import { Experimental1230Service } from './experimental1230.service';

describe('Experimental1230Service', () => {
  let service: Experimental1230Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1230Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
