import { TestBed } from '@angular/core/testing';

import { Experimental1880Service } from './experimental1880.service';

describe('Experimental1880Service', () => {
  let service: Experimental1880Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1880Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
