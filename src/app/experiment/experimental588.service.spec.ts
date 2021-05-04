import { TestBed } from '@angular/core/testing';

import { Experimental588Service } from './experimental588.service';

describe('Experimental588Service', () => {
  let service: Experimental588Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental588Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
