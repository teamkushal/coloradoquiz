import { TestBed } from '@angular/core/testing';

import { Experimental958Service } from './experimental958.service';

describe('Experimental958Service', () => {
  let service: Experimental958Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental958Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
