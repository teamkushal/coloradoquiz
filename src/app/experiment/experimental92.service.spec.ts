import { TestBed } from '@angular/core/testing';

import { Experimental92Service } from './experimental92.service';

describe('Experimental92Service', () => {
  let service: Experimental92Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental92Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
