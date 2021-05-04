import { TestBed } from '@angular/core/testing';

import { Experimental1291Service } from './experimental1291.service';

describe('Experimental1291Service', () => {
  let service: Experimental1291Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1291Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
