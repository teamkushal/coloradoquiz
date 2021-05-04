import { TestBed } from '@angular/core/testing';

import { Experimental1404Service } from './experimental1404.service';

describe('Experimental1404Service', () => {
  let service: Experimental1404Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1404Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
