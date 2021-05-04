import { TestBed } from '@angular/core/testing';

import { Experimental3051Service } from './experimental3051.service';

describe('Experimental3051Service', () => {
  let service: Experimental3051Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3051Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
