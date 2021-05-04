import { TestBed } from '@angular/core/testing';

import { Experimental3039Service } from './experimental3039.service';

describe('Experimental3039Service', () => {
  let service: Experimental3039Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3039Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
