import { TestBed } from '@angular/core/testing';

import { Experimental1627Service } from './experimental1627.service';

describe('Experimental1627Service', () => {
  let service: Experimental1627Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1627Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
