import { TestBed } from '@angular/core/testing';

import { Experimental1904Service } from './experimental1904.service';

describe('Experimental1904Service', () => {
  let service: Experimental1904Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1904Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
