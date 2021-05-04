import { TestBed } from '@angular/core/testing';

import { Experimental1468Service } from './experimental1468.service';

describe('Experimental1468Service', () => {
  let service: Experimental1468Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1468Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
