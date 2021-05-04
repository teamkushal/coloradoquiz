import { TestBed } from '@angular/core/testing';

import { Experimental1785Service } from './experimental1785.service';

describe('Experimental1785Service', () => {
  let service: Experimental1785Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1785Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
