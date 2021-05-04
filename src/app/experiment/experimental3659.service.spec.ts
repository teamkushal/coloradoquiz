import { TestBed } from '@angular/core/testing';

import { Experimental3659Service } from './experimental3659.service';

describe('Experimental3659Service', () => {
  let service: Experimental3659Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3659Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
