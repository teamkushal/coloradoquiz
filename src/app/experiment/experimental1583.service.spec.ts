import { TestBed } from '@angular/core/testing';

import { Experimental1583Service } from './experimental1583.service';

describe('Experimental1583Service', () => {
  let service: Experimental1583Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1583Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
