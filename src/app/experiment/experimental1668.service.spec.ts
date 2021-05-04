import { TestBed } from '@angular/core/testing';

import { Experimental1668Service } from './experimental1668.service';

describe('Experimental1668Service', () => {
  let service: Experimental1668Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1668Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
