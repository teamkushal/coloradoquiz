import { TestBed } from '@angular/core/testing';

import { Experimental1722Service } from './experimental1722.service';

describe('Experimental1722Service', () => {
  let service: Experimental1722Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1722Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
