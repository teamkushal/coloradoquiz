import { TestBed } from '@angular/core/testing';

import { Experimental246Service } from './experimental246.service';

describe('Experimental246Service', () => {
  let service: Experimental246Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental246Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
