import { TestBed } from '@angular/core/testing';

import { Experimental1962Service } from './experimental1962.service';

describe('Experimental1962Service', () => {
  let service: Experimental1962Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1962Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
