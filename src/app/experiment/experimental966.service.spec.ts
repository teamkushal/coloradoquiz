import { TestBed } from '@angular/core/testing';

import { Experimental966Service } from './experimental966.service';

describe('Experimental966Service', () => {
  let service: Experimental966Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental966Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
