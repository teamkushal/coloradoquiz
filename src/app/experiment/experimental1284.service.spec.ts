import { TestBed } from '@angular/core/testing';

import { Experimental1284Service } from './experimental1284.service';

describe('Experimental1284Service', () => {
  let service: Experimental1284Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1284Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
