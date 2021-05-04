import { TestBed } from '@angular/core/testing';

import { Experimental2935Service } from './experimental2935.service';

describe('Experimental2935Service', () => {
  let service: Experimental2935Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2935Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
