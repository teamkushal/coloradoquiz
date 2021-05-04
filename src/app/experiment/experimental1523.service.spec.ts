import { TestBed } from '@angular/core/testing';

import { Experimental1523Service } from './experimental1523.service';

describe('Experimental1523Service', () => {
  let service: Experimental1523Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1523Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
