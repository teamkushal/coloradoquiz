import { TestBed } from '@angular/core/testing';

import { Experimental753Service } from './experimental753.service';

describe('Experimental753Service', () => {
  let service: Experimental753Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental753Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
