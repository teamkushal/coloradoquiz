import { TestBed } from '@angular/core/testing';

import { Experimental2701Service } from './experimental2701.service';

describe('Experimental2701Service', () => {
  let service: Experimental2701Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2701Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
