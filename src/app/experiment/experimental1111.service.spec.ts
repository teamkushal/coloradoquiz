import { TestBed } from '@angular/core/testing';

import { Experimental1111Service } from './experimental1111.service';

describe('Experimental1111Service', () => {
  let service: Experimental1111Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1111Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
