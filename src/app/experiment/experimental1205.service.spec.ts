import { TestBed } from '@angular/core/testing';

import { Experimental1205Service } from './experimental1205.service';

describe('Experimental1205Service', () => {
  let service: Experimental1205Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1205Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
