import { TestBed } from '@angular/core/testing';

import { Experimental1675Service } from './experimental1675.service';

describe('Experimental1675Service', () => {
  let service: Experimental1675Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1675Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
