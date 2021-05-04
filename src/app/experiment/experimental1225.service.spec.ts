import { TestBed } from '@angular/core/testing';

import { Experimental1225Service } from './experimental1225.service';

describe('Experimental1225Service', () => {
  let service: Experimental1225Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1225Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
