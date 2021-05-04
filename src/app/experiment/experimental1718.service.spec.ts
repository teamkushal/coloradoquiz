import { TestBed } from '@angular/core/testing';

import { Experimental1718Service } from './experimental1718.service';

describe('Experimental1718Service', () => {
  let service: Experimental1718Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1718Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
