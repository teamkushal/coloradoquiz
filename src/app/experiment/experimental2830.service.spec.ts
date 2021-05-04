import { TestBed } from '@angular/core/testing';

import { Experimental2830Service } from './experimental2830.service';

describe('Experimental2830Service', () => {
  let service: Experimental2830Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2830Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
