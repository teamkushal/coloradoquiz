import { TestBed } from '@angular/core/testing';

import { Experimental1826Service } from './experimental1826.service';

describe('Experimental1826Service', () => {
  let service: Experimental1826Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1826Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
