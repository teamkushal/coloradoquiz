import { TestBed } from '@angular/core/testing';

import { Experimental132Service } from './experimental132.service';

describe('Experimental132Service', () => {
  let service: Experimental132Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental132Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
