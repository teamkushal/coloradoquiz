import { TestBed } from '@angular/core/testing';

import { Experimental3794Service } from './experimental3794.service';

describe('Experimental3794Service', () => {
  let service: Experimental3794Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3794Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
