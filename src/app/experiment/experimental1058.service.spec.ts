import { TestBed } from '@angular/core/testing';

import { Experimental1058Service } from './experimental1058.service';

describe('Experimental1058Service', () => {
  let service: Experimental1058Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1058Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
