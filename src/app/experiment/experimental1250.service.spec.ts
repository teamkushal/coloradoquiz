import { TestBed } from '@angular/core/testing';

import { Experimental1250Service } from './experimental1250.service';

describe('Experimental1250Service', () => {
  let service: Experimental1250Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1250Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
