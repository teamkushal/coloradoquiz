import { TestBed } from '@angular/core/testing';

import { Experimental1202Service } from './experimental1202.service';

describe('Experimental1202Service', () => {
  let service: Experimental1202Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1202Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
