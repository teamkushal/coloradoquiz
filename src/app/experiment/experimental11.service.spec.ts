import { TestBed } from '@angular/core/testing';

import { Experimental11Service } from './experimental11.service';

describe('Experimental11Service', () => {
  let service: Experimental11Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental11Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
