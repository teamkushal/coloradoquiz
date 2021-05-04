import { TestBed } from '@angular/core/testing';

import { Experimental510Service } from './experimental510.service';

describe('Experimental510Service', () => {
  let service: Experimental510Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental510Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
