import { TestBed } from '@angular/core/testing';

import { Experimental1921Service } from './experimental1921.service';

describe('Experimental1921Service', () => {
  let service: Experimental1921Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1921Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
