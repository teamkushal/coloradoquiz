import { TestBed } from '@angular/core/testing';

import { Experimental548Service } from './experimental548.service';

describe('Experimental548Service', () => {
  let service: Experimental548Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental548Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
