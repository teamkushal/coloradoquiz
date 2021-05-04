import { TestBed } from '@angular/core/testing';

import { Experimental1019Service } from './experimental1019.service';

describe('Experimental1019Service', () => {
  let service: Experimental1019Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1019Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
