import { TestBed } from '@angular/core/testing';

import { Experimental1947Service } from './experimental1947.service';

describe('Experimental1947Service', () => {
  let service: Experimental1947Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1947Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
