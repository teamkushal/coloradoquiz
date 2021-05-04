import { TestBed } from '@angular/core/testing';

import { Experimental1356Service } from './experimental1356.service';

describe('Experimental1356Service', () => {
  let service: Experimental1356Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1356Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
