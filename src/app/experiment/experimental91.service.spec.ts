import { TestBed } from '@angular/core/testing';

import { Experimental91Service } from './experimental91.service';

describe('Experimental91Service', () => {
  let service: Experimental91Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental91Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
