import { TestBed } from '@angular/core/testing';

import { Experimental1847Service } from './experimental1847.service';

describe('Experimental1847Service', () => {
  let service: Experimental1847Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1847Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
