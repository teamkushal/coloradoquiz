import { TestBed } from '@angular/core/testing';

import { Experimental1979Service } from './experimental1979.service';

describe('Experimental1979Service', () => {
  let service: Experimental1979Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1979Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
