import { TestBed } from '@angular/core/testing';

import { Experimental524Service } from './experimental524.service';

describe('Experimental524Service', () => {
  let service: Experimental524Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental524Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
