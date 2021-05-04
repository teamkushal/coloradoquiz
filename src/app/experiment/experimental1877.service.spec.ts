import { TestBed } from '@angular/core/testing';

import { Experimental1877Service } from './experimental1877.service';

describe('Experimental1877Service', () => {
  let service: Experimental1877Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1877Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
