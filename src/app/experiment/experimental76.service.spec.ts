import { TestBed } from '@angular/core/testing';

import { Experimental76Service } from './experimental76.service';

describe('Experimental76Service', () => {
  let service: Experimental76Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental76Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
