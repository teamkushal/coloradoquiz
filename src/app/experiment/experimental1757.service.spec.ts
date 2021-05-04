import { TestBed } from '@angular/core/testing';

import { Experimental1757Service } from './experimental1757.service';

describe('Experimental1757Service', () => {
  let service: Experimental1757Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1757Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
