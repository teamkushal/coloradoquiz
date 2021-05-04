import { TestBed } from '@angular/core/testing';

import { Experimental1435Service } from './experimental1435.service';

describe('Experimental1435Service', () => {
  let service: Experimental1435Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1435Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
