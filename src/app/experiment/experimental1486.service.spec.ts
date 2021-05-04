import { TestBed } from '@angular/core/testing';

import { Experimental1486Service } from './experimental1486.service';

describe('Experimental1486Service', () => {
  let service: Experimental1486Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1486Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
