import { TestBed } from '@angular/core/testing';

import { Experimental540Service } from './experimental540.service';

describe('Experimental540Service', () => {
  let service: Experimental540Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental540Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
