import { TestBed } from '@angular/core/testing';

import { Experimental141Service } from './experimental141.service';

describe('Experimental141Service', () => {
  let service: Experimental141Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental141Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
