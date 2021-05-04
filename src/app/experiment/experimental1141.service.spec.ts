import { TestBed } from '@angular/core/testing';

import { Experimental1141Service } from './experimental1141.service';

describe('Experimental1141Service', () => {
  let service: Experimental1141Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1141Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
