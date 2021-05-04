import { TestBed } from '@angular/core/testing';

import { Experimental572Service } from './experimental572.service';

describe('Experimental572Service', () => {
  let service: Experimental572Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental572Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
