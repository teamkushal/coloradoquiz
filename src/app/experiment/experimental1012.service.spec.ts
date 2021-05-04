import { TestBed } from '@angular/core/testing';

import { Experimental1012Service } from './experimental1012.service';

describe('Experimental1012Service', () => {
  let service: Experimental1012Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1012Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
