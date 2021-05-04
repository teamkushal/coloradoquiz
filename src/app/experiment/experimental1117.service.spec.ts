import { TestBed } from '@angular/core/testing';

import { Experimental1117Service } from './experimental1117.service';

describe('Experimental1117Service', () => {
  let service: Experimental1117Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1117Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
