import { TestBed } from '@angular/core/testing';

import { Experimental1859Service } from './experimental1859.service';

describe('Experimental1859Service', () => {
  let service: Experimental1859Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1859Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
