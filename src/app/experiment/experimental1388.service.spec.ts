import { TestBed } from '@angular/core/testing';

import { Experimental1388Service } from './experimental1388.service';

describe('Experimental1388Service', () => {
  let service: Experimental1388Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1388Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
