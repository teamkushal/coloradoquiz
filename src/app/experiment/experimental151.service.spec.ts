import { TestBed } from '@angular/core/testing';

import { Experimental151Service } from './experimental151.service';

describe('Experimental151Service', () => {
  let service: Experimental151Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental151Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
