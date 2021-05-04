import { TestBed } from '@angular/core/testing';

import { Experimental2048Service } from './experimental2048.service';

describe('Experimental2048Service', () => {
  let service: Experimental2048Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2048Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
