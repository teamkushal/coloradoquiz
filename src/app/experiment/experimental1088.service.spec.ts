import { TestBed } from '@angular/core/testing';

import { Experimental1088Service } from './experimental1088.service';

describe('Experimental1088Service', () => {
  let service: Experimental1088Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1088Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
