import { TestBed } from '@angular/core/testing';

import { Experimental974Service } from './experimental974.service';

describe('Experimental974Service', () => {
  let service: Experimental974Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental974Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
