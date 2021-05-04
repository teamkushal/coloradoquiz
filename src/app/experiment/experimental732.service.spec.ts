import { TestBed } from '@angular/core/testing';

import { Experimental732Service } from './experimental732.service';

describe('Experimental732Service', () => {
  let service: Experimental732Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental732Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
