import { TestBed } from '@angular/core/testing';

import { Experimental970Service } from './experimental970.service';

describe('Experimental970Service', () => {
  let service: Experimental970Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental970Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
