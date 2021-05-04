import { TestBed } from '@angular/core/testing';

import { Experimental3795Service } from './experimental3795.service';

describe('Experimental3795Service', () => {
  let service: Experimental3795Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3795Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
