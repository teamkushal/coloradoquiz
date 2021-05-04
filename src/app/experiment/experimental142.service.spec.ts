import { TestBed } from '@angular/core/testing';

import { Experimental142Service } from './experimental142.service';

describe('Experimental142Service', () => {
  let service: Experimental142Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental142Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
