import { TestBed } from '@angular/core/testing';

import { Experimental446Service } from './experimental446.service';

describe('Experimental446Service', () => {
  let service: Experimental446Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental446Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
