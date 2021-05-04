import { TestBed } from '@angular/core/testing';

import { Experimental1843Service } from './experimental1843.service';

describe('Experimental1843Service', () => {
  let service: Experimental1843Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1843Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
