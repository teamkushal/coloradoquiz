import { TestBed } from '@angular/core/testing';

import { Experimental1047Service } from './experimental1047.service';

describe('Experimental1047Service', () => {
  let service: Experimental1047Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1047Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
