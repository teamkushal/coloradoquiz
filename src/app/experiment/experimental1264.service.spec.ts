import { TestBed } from '@angular/core/testing';

import { Experimental1264Service } from './experimental1264.service';

describe('Experimental1264Service', () => {
  let service: Experimental1264Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1264Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
