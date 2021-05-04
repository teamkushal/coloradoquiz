import { TestBed } from '@angular/core/testing';

import { Experimental1659Service } from './experimental1659.service';

describe('Experimental1659Service', () => {
  let service: Experimental1659Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1659Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
