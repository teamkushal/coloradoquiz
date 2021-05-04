import { TestBed } from '@angular/core/testing';

import { Experimental1585Service } from './experimental1585.service';

describe('Experimental1585Service', () => {
  let service: Experimental1585Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1585Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
