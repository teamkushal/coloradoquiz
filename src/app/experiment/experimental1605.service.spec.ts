import { TestBed } from '@angular/core/testing';

import { Experimental1605Service } from './experimental1605.service';

describe('Experimental1605Service', () => {
  let service: Experimental1605Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1605Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
