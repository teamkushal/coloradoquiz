import { TestBed } from '@angular/core/testing';

import { Experimental945Service } from './experimental945.service';

describe('Experimental945Service', () => {
  let service: Experimental945Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental945Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
