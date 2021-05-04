import { TestBed } from '@angular/core/testing';

import { Experimental169Service } from './experimental169.service';

describe('Experimental169Service', () => {
  let service: Experimental169Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental169Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
