import { TestBed } from '@angular/core/testing';

import { Experimental464Service } from './experimental464.service';

describe('Experimental464Service', () => {
  let service: Experimental464Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental464Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
