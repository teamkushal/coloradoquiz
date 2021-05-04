import { TestBed } from '@angular/core/testing';

import { Experimental618Service } from './experimental618.service';

describe('Experimental618Service', () => {
  let service: Experimental618Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental618Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
