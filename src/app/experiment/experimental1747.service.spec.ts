import { TestBed } from '@angular/core/testing';

import { Experimental1747Service } from './experimental1747.service';

describe('Experimental1747Service', () => {
  let service: Experimental1747Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1747Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
