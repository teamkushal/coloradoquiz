import { TestBed } from '@angular/core/testing';

import { Experimental3843Service } from './experimental3843.service';

describe('Experimental3843Service', () => {
  let service: Experimental3843Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3843Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
