import { TestBed } from '@angular/core/testing';

import { Experimental1992Service } from './experimental1992.service';

describe('Experimental1992Service', () => {
  let service: Experimental1992Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1992Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
