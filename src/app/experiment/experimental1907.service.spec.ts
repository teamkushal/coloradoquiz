import { TestBed } from '@angular/core/testing';

import { Experimental1907Service } from './experimental1907.service';

describe('Experimental1907Service', () => {
  let service: Experimental1907Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1907Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
