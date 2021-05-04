import { TestBed } from '@angular/core/testing';

import { Experimental1693Service } from './experimental1693.service';

describe('Experimental1693Service', () => {
  let service: Experimental1693Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1693Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
