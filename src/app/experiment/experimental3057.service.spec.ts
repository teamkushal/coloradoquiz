import { TestBed } from '@angular/core/testing';

import { Experimental3057Service } from './experimental3057.service';

describe('Experimental3057Service', () => {
  let service: Experimental3057Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3057Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
