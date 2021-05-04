import { TestBed } from '@angular/core/testing';

import { Experimental1332Service } from './experimental1332.service';

describe('Experimental1332Service', () => {
  let service: Experimental1332Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1332Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
