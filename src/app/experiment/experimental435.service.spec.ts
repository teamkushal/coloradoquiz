import { TestBed } from '@angular/core/testing';

import { Experimental435Service } from './experimental435.service';

describe('Experimental435Service', () => {
  let service: Experimental435Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental435Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
