import { TestBed } from '@angular/core/testing';

import { Experimental987Service } from './experimental987.service';

describe('Experimental987Service', () => {
  let service: Experimental987Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental987Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
