import { TestBed } from '@angular/core/testing';

import { Experimental1892Service } from './experimental1892.service';

describe('Experimental1892Service', () => {
  let service: Experimental1892Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1892Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
