import { TestBed } from '@angular/core/testing';

import { Experimental3484Service } from './experimental3484.service';

describe('Experimental3484Service', () => {
  let service: Experimental3484Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3484Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
