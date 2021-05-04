import { TestBed } from '@angular/core/testing';

import { Experimental2705Service } from './experimental2705.service';

describe('Experimental2705Service', () => {
  let service: Experimental2705Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2705Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
