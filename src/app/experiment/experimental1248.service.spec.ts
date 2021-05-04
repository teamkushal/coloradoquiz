import { TestBed } from '@angular/core/testing';

import { Experimental1248Service } from './experimental1248.service';

describe('Experimental1248Service', () => {
  let service: Experimental1248Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1248Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
