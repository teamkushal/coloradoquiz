import { TestBed } from '@angular/core/testing';

import { Experimental1549Service } from './experimental1549.service';

describe('Experimental1549Service', () => {
  let service: Experimental1549Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1549Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
