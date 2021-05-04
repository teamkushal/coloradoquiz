import { TestBed } from '@angular/core/testing';

import { Experimental1455Service } from './experimental1455.service';

describe('Experimental1455Service', () => {
  let service: Experimental1455Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1455Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
