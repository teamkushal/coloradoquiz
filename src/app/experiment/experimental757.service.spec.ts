import { TestBed } from '@angular/core/testing';

import { Experimental757Service } from './experimental757.service';

describe('Experimental757Service', () => {
  let service: Experimental757Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental757Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
