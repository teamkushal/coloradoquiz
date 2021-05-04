import { TestBed } from '@angular/core/testing';

import { Experimental1769Service } from './experimental1769.service';

describe('Experimental1769Service', () => {
  let service: Experimental1769Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1769Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
