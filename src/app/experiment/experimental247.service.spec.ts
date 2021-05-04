import { TestBed } from '@angular/core/testing';

import { Experimental247Service } from './experimental247.service';

describe('Experimental247Service', () => {
  let service: Experimental247Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental247Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
