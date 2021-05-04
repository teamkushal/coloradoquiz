import { TestBed } from '@angular/core/testing';

import { Experimental664Service } from './experimental664.service';

describe('Experimental664Service', () => {
  let service: Experimental664Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental664Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
