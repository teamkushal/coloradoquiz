import { TestBed } from '@angular/core/testing';

import { Experimental1587Service } from './experimental1587.service';

describe('Experimental1587Service', () => {
  let service: Experimental1587Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1587Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
