import { TestBed } from '@angular/core/testing';

import { Experimental669Service } from './experimental669.service';

describe('Experimental669Service', () => {
  let service: Experimental669Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental669Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
