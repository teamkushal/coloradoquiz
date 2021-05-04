import { TestBed } from '@angular/core/testing';

import { Experimental1132Service } from './experimental1132.service';

describe('Experimental1132Service', () => {
  let service: Experimental1132Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1132Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
