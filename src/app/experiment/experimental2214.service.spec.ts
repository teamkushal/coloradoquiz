import { TestBed } from '@angular/core/testing';

import { Experimental2214Service } from './experimental2214.service';

describe('Experimental2214Service', () => {
  let service: Experimental2214Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2214Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
