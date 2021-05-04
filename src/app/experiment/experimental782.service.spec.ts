import { TestBed } from '@angular/core/testing';

import { Experimental782Service } from './experimental782.service';

describe('Experimental782Service', () => {
  let service: Experimental782Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental782Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
