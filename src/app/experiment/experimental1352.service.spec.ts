import { TestBed } from '@angular/core/testing';

import { Experimental1352Service } from './experimental1352.service';

describe('Experimental1352Service', () => {
  let service: Experimental1352Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1352Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
