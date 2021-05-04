import { TestBed } from '@angular/core/testing';

import { Experimental1657Service } from './experimental1657.service';

describe('Experimental1657Service', () => {
  let service: Experimental1657Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1657Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
