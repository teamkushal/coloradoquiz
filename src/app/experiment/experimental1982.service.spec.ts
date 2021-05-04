import { TestBed } from '@angular/core/testing';

import { Experimental1982Service } from './experimental1982.service';

describe('Experimental1982Service', () => {
  let service: Experimental1982Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1982Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
