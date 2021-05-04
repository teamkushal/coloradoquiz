import { TestBed } from '@angular/core/testing';

import { Experimental351Service } from './experimental351.service';

describe('Experimental351Service', () => {
  let service: Experimental351Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental351Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
