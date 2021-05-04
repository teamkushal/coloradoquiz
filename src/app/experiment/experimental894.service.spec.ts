import { TestBed } from '@angular/core/testing';

import { Experimental894Service } from './experimental894.service';

describe('Experimental894Service', () => {
  let service: Experimental894Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental894Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
