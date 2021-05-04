import { TestBed } from '@angular/core/testing';

import { Experimental1242Service } from './experimental1242.service';

describe('Experimental1242Service', () => {
  let service: Experimental1242Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1242Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
