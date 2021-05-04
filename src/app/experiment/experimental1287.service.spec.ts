import { TestBed } from '@angular/core/testing';

import { Experimental1287Service } from './experimental1287.service';

describe('Experimental1287Service', () => {
  let service: Experimental1287Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1287Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
