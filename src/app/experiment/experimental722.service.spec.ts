import { TestBed } from '@angular/core/testing';

import { Experimental722Service } from './experimental722.service';

describe('Experimental722Service', () => {
  let service: Experimental722Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental722Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
