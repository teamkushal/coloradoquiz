import { TestBed } from '@angular/core/testing';

import { Experimental1255Service } from './experimental1255.service';

describe('Experimental1255Service', () => {
  let service: Experimental1255Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1255Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
