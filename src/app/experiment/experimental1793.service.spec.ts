import { TestBed } from '@angular/core/testing';

import { Experimental1793Service } from './experimental1793.service';

describe('Experimental1793Service', () => {
  let service: Experimental1793Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1793Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
