import { TestBed } from '@angular/core/testing';

import { Experimental1941Service } from './experimental1941.service';

describe('Experimental1941Service', () => {
  let service: Experimental1941Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1941Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
