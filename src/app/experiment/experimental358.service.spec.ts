import { TestBed } from '@angular/core/testing';

import { Experimental358Service } from './experimental358.service';

describe('Experimental358Service', () => {
  let service: Experimental358Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental358Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
