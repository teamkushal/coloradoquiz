import { TestBed } from '@angular/core/testing';

import { Experimental1908Service } from './experimental1908.service';

describe('Experimental1908Service', () => {
  let service: Experimental1908Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1908Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
