import { TestBed } from '@angular/core/testing';

import { Experimental3556Service } from './experimental3556.service';

describe('Experimental3556Service', () => {
  let service: Experimental3556Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3556Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
