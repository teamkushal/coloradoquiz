import { TestBed } from '@angular/core/testing';

import { Experimental1610Service } from './experimental1610.service';

describe('Experimental1610Service', () => {
  let service: Experimental1610Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1610Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
