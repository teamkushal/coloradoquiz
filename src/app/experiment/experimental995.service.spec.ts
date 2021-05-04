import { TestBed } from '@angular/core/testing';

import { Experimental995Service } from './experimental995.service';

describe('Experimental995Service', () => {
  let service: Experimental995Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental995Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
