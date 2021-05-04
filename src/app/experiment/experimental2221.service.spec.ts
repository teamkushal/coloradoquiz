import { TestBed } from '@angular/core/testing';

import { Experimental2221Service } from './experimental2221.service';

describe('Experimental2221Service', () => {
  let service: Experimental2221Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2221Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
