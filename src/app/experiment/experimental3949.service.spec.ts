import { TestBed } from '@angular/core/testing';

import { Experimental3949Service } from './experimental3949.service';

describe('Experimental3949Service', () => {
  let service: Experimental3949Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3949Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
