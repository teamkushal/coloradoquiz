import { TestBed } from '@angular/core/testing';

import { Experimental1007Service } from './experimental1007.service';

describe('Experimental1007Service', () => {
  let service: Experimental1007Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1007Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
