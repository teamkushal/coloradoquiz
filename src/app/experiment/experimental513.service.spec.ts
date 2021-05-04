import { TestBed } from '@angular/core/testing';

import { Experimental513Service } from './experimental513.service';

describe('Experimental513Service', () => {
  let service: Experimental513Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental513Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
