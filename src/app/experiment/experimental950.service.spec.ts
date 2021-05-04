import { TestBed } from '@angular/core/testing';

import { Experimental950Service } from './experimental950.service';

describe('Experimental950Service', () => {
  let service: Experimental950Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental950Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
