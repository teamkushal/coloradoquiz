import { TestBed } from '@angular/core/testing';

import { Experimental980Service } from './experimental980.service';

describe('Experimental980Service', () => {
  let service: Experimental980Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental980Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
