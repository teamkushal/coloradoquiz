import { TestBed } from '@angular/core/testing';

import { Experimental1794Service } from './experimental1794.service';

describe('Experimental1794Service', () => {
  let service: Experimental1794Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1794Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
