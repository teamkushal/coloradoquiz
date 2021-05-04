import { TestBed } from '@angular/core/testing';

import { Experimental1177Service } from './experimental1177.service';

describe('Experimental1177Service', () => {
  let service: Experimental1177Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1177Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
