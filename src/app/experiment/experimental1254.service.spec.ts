import { TestBed } from '@angular/core/testing';

import { Experimental1254Service } from './experimental1254.service';

describe('Experimental1254Service', () => {
  let service: Experimental1254Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1254Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
