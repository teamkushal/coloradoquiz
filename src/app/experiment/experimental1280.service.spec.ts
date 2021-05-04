import { TestBed } from '@angular/core/testing';

import { Experimental1280Service } from './experimental1280.service';

describe('Experimental1280Service', () => {
  let service: Experimental1280Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1280Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
