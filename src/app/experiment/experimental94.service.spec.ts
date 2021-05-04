import { TestBed } from '@angular/core/testing';

import { Experimental94Service } from './experimental94.service';

describe('Experimental94Service', () => {
  let service: Experimental94Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental94Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
