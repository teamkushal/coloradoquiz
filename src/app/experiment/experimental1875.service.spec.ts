import { TestBed } from '@angular/core/testing';

import { Experimental1875Service } from './experimental1875.service';

describe('Experimental1875Service', () => {
  let service: Experimental1875Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1875Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
