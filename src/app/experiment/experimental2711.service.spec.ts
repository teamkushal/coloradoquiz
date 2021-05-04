import { TestBed } from '@angular/core/testing';

import { Experimental2711Service } from './experimental2711.service';

describe('Experimental2711Service', () => {
  let service: Experimental2711Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2711Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
