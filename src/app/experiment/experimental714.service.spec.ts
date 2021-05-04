import { TestBed } from '@angular/core/testing';

import { Experimental714Service } from './experimental714.service';

describe('Experimental714Service', () => {
  let service: Experimental714Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental714Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
