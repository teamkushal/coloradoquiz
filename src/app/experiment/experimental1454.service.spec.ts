import { TestBed } from '@angular/core/testing';

import { Experimental1454Service } from './experimental1454.service';

describe('Experimental1454Service', () => {
  let service: Experimental1454Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1454Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
