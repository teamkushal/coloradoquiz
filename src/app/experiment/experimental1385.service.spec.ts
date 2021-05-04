import { TestBed } from '@angular/core/testing';

import { Experimental1385Service } from './experimental1385.service';

describe('Experimental1385Service', () => {
  let service: Experimental1385Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1385Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
