import { TestBed } from '@angular/core/testing';

import { Experimental815Service } from './experimental815.service';

describe('Experimental815Service', () => {
  let service: Experimental815Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental815Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
