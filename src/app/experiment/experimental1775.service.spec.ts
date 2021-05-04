import { TestBed } from '@angular/core/testing';

import { Experimental1775Service } from './experimental1775.service';

describe('Experimental1775Service', () => {
  let service: Experimental1775Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1775Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
