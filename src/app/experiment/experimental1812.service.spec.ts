import { TestBed } from '@angular/core/testing';

import { Experimental1812Service } from './experimental1812.service';

describe('Experimental1812Service', () => {
  let service: Experimental1812Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1812Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
