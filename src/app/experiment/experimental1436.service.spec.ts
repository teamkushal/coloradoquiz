import { TestBed } from '@angular/core/testing';

import { Experimental1436Service } from './experimental1436.service';

describe('Experimental1436Service', () => {
  let service: Experimental1436Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1436Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
