import { TestBed } from '@angular/core/testing';

import { Experimental3333Service } from './experimental3333.service';

describe('Experimental3333Service', () => {
  let service: Experimental3333Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3333Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
