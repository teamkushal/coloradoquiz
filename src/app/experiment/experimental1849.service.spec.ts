import { TestBed } from '@angular/core/testing';

import { Experimental1849Service } from './experimental1849.service';

describe('Experimental1849Service', () => {
  let service: Experimental1849Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1849Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
