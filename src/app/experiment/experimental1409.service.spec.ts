import { TestBed } from '@angular/core/testing';

import { Experimental1409Service } from './experimental1409.service';

describe('Experimental1409Service', () => {
  let service: Experimental1409Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1409Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
