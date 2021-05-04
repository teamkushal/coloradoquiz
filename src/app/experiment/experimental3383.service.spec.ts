import { TestBed } from '@angular/core/testing';

import { Experimental3383Service } from './experimental3383.service';

describe('Experimental3383Service', () => {
  let service: Experimental3383Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3383Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
