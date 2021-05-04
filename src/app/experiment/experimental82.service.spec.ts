import { TestBed } from '@angular/core/testing';

import { Experimental82Service } from './experimental82.service';

describe('Experimental82Service', () => {
  let service: Experimental82Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental82Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
