import { TestBed } from '@angular/core/testing';

import { Experimental1278Service } from './experimental1278.service';

describe('Experimental1278Service', () => {
  let service: Experimental1278Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1278Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
