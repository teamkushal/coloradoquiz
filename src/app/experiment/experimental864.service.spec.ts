import { TestBed } from '@angular/core/testing';

import { Experimental864Service } from './experimental864.service';

describe('Experimental864Service', () => {
  let service: Experimental864Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental864Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
