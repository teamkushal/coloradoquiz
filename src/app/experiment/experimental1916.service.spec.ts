import { TestBed } from '@angular/core/testing';

import { Experimental1916Service } from './experimental1916.service';

describe('Experimental1916Service', () => {
  let service: Experimental1916Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1916Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
