import { TestBed } from '@angular/core/testing';

import { Experimental475Service } from './experimental475.service';

describe('Experimental475Service', () => {
  let service: Experimental475Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental475Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
