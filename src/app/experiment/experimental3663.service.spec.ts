import { TestBed } from '@angular/core/testing';

import { Experimental3663Service } from './experimental3663.service';

describe('Experimental3663Service', () => {
  let service: Experimental3663Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3663Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
