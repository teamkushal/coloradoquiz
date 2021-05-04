import { TestBed } from '@angular/core/testing';

import { Experimental71Service } from './experimental71.service';

describe('Experimental71Service', () => {
  let service: Experimental71Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental71Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
