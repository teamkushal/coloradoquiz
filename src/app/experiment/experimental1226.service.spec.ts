import { TestBed } from '@angular/core/testing';

import { Experimental1226Service } from './experimental1226.service';

describe('Experimental1226Service', () => {
  let service: Experimental1226Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1226Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
