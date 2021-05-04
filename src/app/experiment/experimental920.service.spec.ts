import { TestBed } from '@angular/core/testing';

import { Experimental920Service } from './experimental920.service';

describe('Experimental920Service', () => {
  let service: Experimental920Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental920Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
