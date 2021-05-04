import { TestBed } from '@angular/core/testing';

import { Experimental1245Service } from './experimental1245.service';

describe('Experimental1245Service', () => {
  let service: Experimental1245Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1245Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
