import { TestBed } from '@angular/core/testing';

import { Experimental2822Service } from './experimental2822.service';

describe('Experimental2822Service', () => {
  let service: Experimental2822Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2822Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
