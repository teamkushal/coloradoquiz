import { TestBed } from '@angular/core/testing';

import { Experimental1860Service } from './experimental1860.service';

describe('Experimental1860Service', () => {
  let service: Experimental1860Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1860Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
