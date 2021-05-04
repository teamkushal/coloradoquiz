import { TestBed } from '@angular/core/testing';

import { Experimental608Service } from './experimental608.service';

describe('Experimental608Service', () => {
  let service: Experimental608Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental608Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
