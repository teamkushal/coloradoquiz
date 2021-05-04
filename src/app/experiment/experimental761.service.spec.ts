import { TestBed } from '@angular/core/testing';

import { Experimental761Service } from './experimental761.service';

describe('Experimental761Service', () => {
  let service: Experimental761Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental761Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
