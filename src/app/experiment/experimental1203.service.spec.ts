import { TestBed } from '@angular/core/testing';

import { Experimental1203Service } from './experimental1203.service';

describe('Experimental1203Service', () => {
  let service: Experimental1203Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1203Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
