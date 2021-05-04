import { TestBed } from '@angular/core/testing';

import { Experimental1092Service } from './experimental1092.service';

describe('Experimental1092Service', () => {
  let service: Experimental1092Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1092Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
