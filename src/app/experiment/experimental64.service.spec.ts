import { TestBed } from '@angular/core/testing';

import { Experimental64Service } from './experimental64.service';

describe('Experimental64Service', () => {
  let service: Experimental64Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental64Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
