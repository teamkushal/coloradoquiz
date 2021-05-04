import { TestBed } from '@angular/core/testing';

import { Experimental1075Service } from './experimental1075.service';

describe('Experimental1075Service', () => {
  let service: Experimental1075Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1075Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
