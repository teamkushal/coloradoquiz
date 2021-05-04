import { TestBed } from '@angular/core/testing';

import { Experimental1933Service } from './experimental1933.service';

describe('Experimental1933Service', () => {
  let service: Experimental1933Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1933Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
