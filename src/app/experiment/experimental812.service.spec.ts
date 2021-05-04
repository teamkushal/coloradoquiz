import { TestBed } from '@angular/core/testing';

import { Experimental812Service } from './experimental812.service';

describe('Experimental812Service', () => {
  let service: Experimental812Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental812Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
