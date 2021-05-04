import { TestBed } from '@angular/core/testing';

import { Experimental1256Service } from './experimental1256.service';

describe('Experimental1256Service', () => {
  let service: Experimental1256Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1256Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
