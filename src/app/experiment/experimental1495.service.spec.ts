import { TestBed } from '@angular/core/testing';

import { Experimental1495Service } from './experimental1495.service';

describe('Experimental1495Service', () => {
  let service: Experimental1495Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1495Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
