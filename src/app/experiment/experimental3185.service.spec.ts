import { TestBed } from '@angular/core/testing';

import { Experimental3185Service } from './experimental3185.service';

describe('Experimental3185Service', () => {
  let service: Experimental3185Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3185Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
