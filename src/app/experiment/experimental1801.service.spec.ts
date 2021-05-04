import { TestBed } from '@angular/core/testing';

import { Experimental1801Service } from './experimental1801.service';

describe('Experimental1801Service', () => {
  let service: Experimental1801Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1801Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
