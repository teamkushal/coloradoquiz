import { TestBed } from '@angular/core/testing';

import { Experimental564Service } from './experimental564.service';

describe('Experimental564Service', () => {
  let service: Experimental564Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental564Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
