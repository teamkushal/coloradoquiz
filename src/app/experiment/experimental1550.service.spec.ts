import { TestBed } from '@angular/core/testing';

import { Experimental1550Service } from './experimental1550.service';

describe('Experimental1550Service', () => {
  let service: Experimental1550Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1550Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
