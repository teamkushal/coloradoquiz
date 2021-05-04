import { TestBed } from '@angular/core/testing';

import { Experimental1463Service } from './experimental1463.service';

describe('Experimental1463Service', () => {
  let service: Experimental1463Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1463Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
