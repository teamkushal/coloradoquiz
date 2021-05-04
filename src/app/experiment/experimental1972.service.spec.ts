import { TestBed } from '@angular/core/testing';

import { Experimental1972Service } from './experimental1972.service';

describe('Experimental1972Service', () => {
  let service: Experimental1972Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1972Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
