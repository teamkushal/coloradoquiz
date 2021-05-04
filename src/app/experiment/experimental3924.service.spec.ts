import { TestBed } from '@angular/core/testing';

import { Experimental3924Service } from './experimental3924.service';

describe('Experimental3924Service', () => {
  let service: Experimental3924Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3924Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
