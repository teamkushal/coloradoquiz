import { TestBed } from '@angular/core/testing';

import { Experimental1453Service } from './experimental1453.service';

describe('Experimental1453Service', () => {
  let service: Experimental1453Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1453Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
