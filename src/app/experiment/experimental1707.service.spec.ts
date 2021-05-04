import { TestBed } from '@angular/core/testing';

import { Experimental1707Service } from './experimental1707.service';

describe('Experimental1707Service', () => {
  let service: Experimental1707Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1707Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
