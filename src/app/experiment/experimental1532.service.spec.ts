import { TestBed } from '@angular/core/testing';

import { Experimental1532Service } from './experimental1532.service';

describe('Experimental1532Service', () => {
  let service: Experimental1532Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1532Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
