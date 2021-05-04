import { TestBed } from '@angular/core/testing';

import { Experimental1705Service } from './experimental1705.service';

describe('Experimental1705Service', () => {
  let service: Experimental1705Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1705Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
