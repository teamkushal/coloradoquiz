import { TestBed } from '@angular/core/testing';

import { Experimental363Service } from './experimental363.service';

describe('Experimental363Service', () => {
  let service: Experimental363Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental363Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
