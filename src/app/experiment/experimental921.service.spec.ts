import { TestBed } from '@angular/core/testing';

import { Experimental921Service } from './experimental921.service';

describe('Experimental921Service', () => {
  let service: Experimental921Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental921Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
