import { TestBed } from '@angular/core/testing';

import { Experimental733Service } from './experimental733.service';

describe('Experimental733Service', () => {
  let service: Experimental733Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental733Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
