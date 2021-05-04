import { TestBed } from '@angular/core/testing';

import { Experimental1312Service } from './experimental1312.service';

describe('Experimental1312Service', () => {
  let service: Experimental1312Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1312Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
