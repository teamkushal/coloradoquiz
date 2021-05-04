import { TestBed } from '@angular/core/testing';

import { Experimental1011Service } from './experimental1011.service';

describe('Experimental1011Service', () => {
  let service: Experimental1011Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1011Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
