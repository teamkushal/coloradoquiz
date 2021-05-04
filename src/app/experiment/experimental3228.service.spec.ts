import { TestBed } from '@angular/core/testing';

import { Experimental3228Service } from './experimental3228.service';

describe('Experimental3228Service', () => {
  let service: Experimental3228Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3228Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
