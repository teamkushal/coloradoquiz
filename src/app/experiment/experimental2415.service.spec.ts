import { TestBed } from '@angular/core/testing';

import { Experimental2415Service } from './experimental2415.service';

describe('Experimental2415Service', () => {
  let service: Experimental2415Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2415Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
