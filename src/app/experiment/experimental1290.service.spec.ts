import { TestBed } from '@angular/core/testing';

import { Experimental1290Service } from './experimental1290.service';

describe('Experimental1290Service', () => {
  let service: Experimental1290Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1290Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
