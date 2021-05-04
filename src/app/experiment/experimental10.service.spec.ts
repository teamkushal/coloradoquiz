import { TestBed } from '@angular/core/testing';

import { Experimental10Service } from './experimental10.service';

describe('Experimental10Service', () => {
  let service: Experimental10Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental10Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
