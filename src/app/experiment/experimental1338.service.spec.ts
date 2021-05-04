import { TestBed } from '@angular/core/testing';

import { Experimental1338Service } from './experimental1338.service';

describe('Experimental1338Service', () => {
  let service: Experimental1338Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1338Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
