import { TestBed } from '@angular/core/testing';

import { Experimental1003Service } from './experimental1003.service';

describe('Experimental1003Service', () => {
  let service: Experimental1003Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1003Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
