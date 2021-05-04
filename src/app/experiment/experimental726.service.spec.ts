import { TestBed } from '@angular/core/testing';

import { Experimental726Service } from './experimental726.service';

describe('Experimental726Service', () => {
  let service: Experimental726Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental726Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
