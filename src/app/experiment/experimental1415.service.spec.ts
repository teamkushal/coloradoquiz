import { TestBed } from '@angular/core/testing';

import { Experimental1415Service } from './experimental1415.service';

describe('Experimental1415Service', () => {
  let service: Experimental1415Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1415Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
