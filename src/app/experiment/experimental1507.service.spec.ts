import { TestBed } from '@angular/core/testing';

import { Experimental1507Service } from './experimental1507.service';

describe('Experimental1507Service', () => {
  let service: Experimental1507Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1507Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
