import { TestBed } from '@angular/core/testing';

import { Experimental1935Service } from './experimental1935.service';

describe('Experimental1935Service', () => {
  let service: Experimental1935Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1935Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
