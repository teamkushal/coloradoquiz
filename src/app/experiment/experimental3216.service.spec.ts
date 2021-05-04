import { TestBed } from '@angular/core/testing';

import { Experimental3216Service } from './experimental3216.service';

describe('Experimental3216Service', () => {
  let service: Experimental3216Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3216Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
