import { TestBed } from '@angular/core/testing';

import { Experimental1568Service } from './experimental1568.service';

describe('Experimental1568Service', () => {
  let service: Experimental1568Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1568Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
