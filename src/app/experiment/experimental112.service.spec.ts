import { TestBed } from '@angular/core/testing';

import { Experimental112Service } from './experimental112.service';

describe('Experimental112Service', () => {
  let service: Experimental112Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental112Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
