import { TestBed } from '@angular/core/testing';

import { Experimental1881Service } from './experimental1881.service';

describe('Experimental1881Service', () => {
  let service: Experimental1881Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1881Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
