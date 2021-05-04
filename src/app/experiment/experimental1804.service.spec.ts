import { TestBed } from '@angular/core/testing';

import { Experimental1804Service } from './experimental1804.service';

describe('Experimental1804Service', () => {
  let service: Experimental1804Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1804Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
