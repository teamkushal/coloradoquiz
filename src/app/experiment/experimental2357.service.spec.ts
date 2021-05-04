import { TestBed } from '@angular/core/testing';

import { Experimental2357Service } from './experimental2357.service';

describe('Experimental2357Service', () => {
  let service: Experimental2357Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2357Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
