import { TestBed } from '@angular/core/testing';

import { Experimental745Service } from './experimental745.service';

describe('Experimental745Service', () => {
  let service: Experimental745Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental745Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
