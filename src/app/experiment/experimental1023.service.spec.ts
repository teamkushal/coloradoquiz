import { TestBed } from '@angular/core/testing';

import { Experimental1023Service } from './experimental1023.service';

describe('Experimental1023Service', () => {
  let service: Experimental1023Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1023Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
