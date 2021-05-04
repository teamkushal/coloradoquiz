import { TestBed } from '@angular/core/testing';

import { Experimental724Service } from './experimental724.service';

describe('Experimental724Service', () => {
  let service: Experimental724Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental724Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
