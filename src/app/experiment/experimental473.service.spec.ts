import { TestBed } from '@angular/core/testing';

import { Experimental473Service } from './experimental473.service';

describe('Experimental473Service', () => {
  let service: Experimental473Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental473Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
