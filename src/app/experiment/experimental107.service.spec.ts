import { TestBed } from '@angular/core/testing';

import { Experimental107Service } from './experimental107.service';

describe('Experimental107Service', () => {
  let service: Experimental107Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental107Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
