import { TestBed } from '@angular/core/testing';

import { Experimental1922Service } from './experimental1922.service';

describe('Experimental1922Service', () => {
  let service: Experimental1922Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1922Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
