import { TestBed } from '@angular/core/testing';

import { Experimental1676Service } from './experimental1676.service';

describe('Experimental1676Service', () => {
  let service: Experimental1676Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1676Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
