import { TestBed } from '@angular/core/testing';

import { Experimental323Service } from './experimental323.service';

describe('Experimental323Service', () => {
  let service: Experimental323Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental323Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
