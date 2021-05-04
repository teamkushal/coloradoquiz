import { TestBed } from '@angular/core/testing';

import { Experimental1106Service } from './experimental1106.service';

describe('Experimental1106Service', () => {
  let service: Experimental1106Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1106Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
