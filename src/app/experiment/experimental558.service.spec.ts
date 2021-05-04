import { TestBed } from '@angular/core/testing';

import { Experimental558Service } from './experimental558.service';

describe('Experimental558Service', () => {
  let service: Experimental558Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental558Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
