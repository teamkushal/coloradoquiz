import { TestBed } from '@angular/core/testing';

import { Experimental1057Service } from './experimental1057.service';

describe('Experimental1057Service', () => {
  let service: Experimental1057Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1057Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
