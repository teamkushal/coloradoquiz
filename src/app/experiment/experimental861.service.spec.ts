import { TestBed } from '@angular/core/testing';

import { Experimental861Service } from './experimental861.service';

describe('Experimental861Service', () => {
  let service: Experimental861Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental861Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
