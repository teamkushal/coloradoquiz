import { TestBed } from '@angular/core/testing';

import { Experimental1418Service } from './experimental1418.service';

describe('Experimental1418Service', () => {
  let service: Experimental1418Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1418Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
