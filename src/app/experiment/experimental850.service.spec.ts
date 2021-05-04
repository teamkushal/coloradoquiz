import { TestBed } from '@angular/core/testing';

import { Experimental850Service } from './experimental850.service';

describe('Experimental850Service', () => {
  let service: Experimental850Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental850Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
