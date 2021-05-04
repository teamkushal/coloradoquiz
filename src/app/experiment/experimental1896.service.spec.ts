import { TestBed } from '@angular/core/testing';

import { Experimental1896Service } from './experimental1896.service';

describe('Experimental1896Service', () => {
  let service: Experimental1896Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1896Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
