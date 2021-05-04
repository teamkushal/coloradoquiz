import { TestBed } from '@angular/core/testing';

import { Experimental1501Service } from './experimental1501.service';

describe('Experimental1501Service', () => {
  let service: Experimental1501Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1501Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
