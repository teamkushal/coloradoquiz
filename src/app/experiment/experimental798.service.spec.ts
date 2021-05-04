import { TestBed } from '@angular/core/testing';

import { Experimental798Service } from './experimental798.service';

describe('Experimental798Service', () => {
  let service: Experimental798Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental798Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
